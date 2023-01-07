import React, { useEffect, useState } from 'react';
import { Container, Row, Pagination } from 'react-bootstrap';
import './Achievements.css';
import DisplayContent from './DisplayContent';
import Modal from '../Modal/Modal';
import FooterBar from '../Footer/footer-bottom';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from '../DomainToolbar/Toolbar';
import { getAllAchievementDetails } from '../api/requests';

function findData(data, hardware, software) {
  let tempData = [];

  if (hardware === true) {
    tempData = tempData.concat(data.hardware);
  }
  if (software === true) {
    tempData = tempData.concat(data.software);
  }
  // console.log(tempData)

  return tempData;
}
export default function Achievements() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);
  const [domain, setDomain] = useState([false, false]);
  const [error, setError] = useState('');
  const [numPage, setNumPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [index, setIndex] = useState(0);
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setLoading(true);
    setData(findData(res, domain[0], domain[1]));
  }, [domain]);

  const [loading, setLoading] = React.useState(false);
  const fetchData = async () => {
    setLoading(true);
    const res = await getAllAchievementDetails();
    if (res) {
      if (res.status && res.status === 500) {
        setError('serverError');
      } else {
        if (res.length === 0) {
          setError('emptyData');
        }
        setData(findData(res, true, true));
        setRes(res);
      }
      setLoading(false);
    } else {
      setError('cantConnect');
      setLoading(false);
    }
  };
  useEffect(() => {
    setNumPage(data.length / 4);
    handleChangePage(1);
    if (res.length !== 0) setLoading(false);
  }, [data]);

  const handleChangePage = (num) => {
    setLoading(true);
    setActivePage(num);
    let st = 0;
    if (num === 1) {
      st = 0;
    } else if (num === numPage) {
      st = data.length - 4;
    } else {
      st = (num - 1) * 4;
    }
    setIndex(st);
  };

  const handlePrevPage = () => {
    if (activePage > 1) {
      setLoading(true);
      setActivePage((prev) => prev - 1);
      const oldId = index;
      if (oldId - 4 >= 0) {
        setIndex(oldId - 4);
      } else {
        setIndex(0);
      }
    }
  };

  const handleNextPage = () => {
    if (activePage < numPage) {
      setLoading(true);
      setActivePage((prev) => prev + 1);
      const oldId = index;
      if (oldId + 4 < data.length) {
        setIndex(oldId + 4);
      } else {
        setIndex(data.length - 4);
      }
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [index]);

  return (
    <div id="achv-page">
      <div className="achv-intro-section">
        {/* <Image
          className="achv_banner"
          src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          fluid
        ></Image> */}
        <div className="display-3 achv_banner_title">ACHIEVEMENTS</div>
      </div>
      {data.length > 0 && (
        <div className="domains">
          <Toolbar setDomain={setDomain} domain={domain}></Toolbar>
        </div>
      )}
      <Container fluid="md">
        <Container fluid>
          <Pagination>
            <Pagination.Prev onClick={handlePrevPage} />
            {Array.apply(null, Array(Math.ceil(numPage))).map((_, id) => {
              return (
                <Pagination.Item
                  key={id}
                  active={activePage === id + 1}
                  onClick={() => handleChangePage(id + 1)}
                >
                  {id + 1}
                </Pagination.Item>
              );
            })}
            <Pagination.Next onClick={handleNextPage} />
          </Pagination>
          <Row className="my-3 achv-display-cards">
            {loading === true ? (
              <div className="achv-error-div">
                <CircularProgress className="achv-error-icon" />
              </div>
            ) : (
              <>
                {error === '' ? (
                  data
                    .slice(index, index + 4)
                    .map((ele, id) => (
                      <DisplayContent
                        setModalShow={setModalShow}
                        setCurrentData={setCurrentData}
                        ele={ele}
                        id={id}
                        key={id}
                      />
                    ))
                ) : (
                  <div className="achv-error-div">
                    <ErrorIcon className="achv-error-icon" />
                    <div>
                      <h3>Error</h3>
                      {error === 'serverError' && <h5>Cannot connect to Server!</h5>}
                      {error === 'cantConnect' && <h5>Cannot connect to Server!</h5>}
                      {error === 'emptyData' && <h5>No data found!</h5>}
                    </div>
                  </div>
                )}
              </>
            )}
          </Row>
        </Container>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={currentData?.name_of_event}
          members={currentData?.Members}
          info={currentData?.desc}
          // image={currentData?.achievement_photo_url}
        />
      </Container>
      <FooterBar />
    </div>
  );
}
