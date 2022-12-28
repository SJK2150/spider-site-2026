import React, { useEffect, useState } from 'react';
import { Container, Row, Pagination } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import DisplayContent from './DisplayContent';
import './Projects.css';
import Modal from '../Modal/Modal';
import Toolbar from '../DomainToolbar/Toolbar';
import FooterBar from '../Footer/footer-bottom';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';
// import data from './data.json'
import { getAllProjectsDetails } from '../api/requests';

function findData(data, hardware, software) {


  let tempData = [];

  if (hardware === true) {
    tempData = tempData.concat(data.hardware);
  }
  if (software === true) {
    tempData = tempData.concat(data.software);
  }


  return tempData;
}

export default function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);
  const [domain, setDomain] = useState([false, false]);
  const [numPage, setNumPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [index, setIndex] = useState(0);

  const [currentData, setCurrentData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
    let arr = [];
    for (let i = 0; i < 2; i++) {
      arr.push(false);
    }
    setDomain([...arr]);
  }, []);
  useEffect(() => {
    setLoading(true);
    setData(findData(res, domain[0], domain[1]))
  }, [domain]);

  const [loading, setLoading] = React.useState(false);
  const fetchData = async () => {
    setLoading(true)
    const res = await getAllProjectsDetails();
    if (res) {
      if (res.status && res.status === 500) {
        setError('serverError')
      }
      else {
        if (res.length === 0) {
          setError('emptyData')
        }
        // setNumPage(res.length/4);
        setData(findData(res, true, true));
        setRes(res);

      }
      setLoading(false)
    }
    else {
      setError('cantConnect');
      setLoading(false);
    }
  }
  useEffect(() => {
    if (res.length !== 0)
      setLoading(false);

    setNumPage(data.length / 4);
  }, [data])

  const handleChangePage = (num) => {
    setActivePage(num);
    let st = 0;
    if(num === 1){
      st = 0;
    }else if(num === numPage){
      st = data.length - 4;
    }else{
      st = (num-1)*4;
    }
    setIndex(st);
  }

  const handlePrevPage = () =>{
    if(activePage>1){
      setActivePage(prev => prev - 1);
      const oldId = index;
      if(oldId - 4 >= 0){
        setIndex(oldId - 4);
      }else{
        setIndex(0);
      }
    }
  }

  const handleNextPage = () => {
    if(activePage<numPage){
      setActivePage(prev => prev + 1);
      const oldId = index;
      if (oldId + 4 < data.length) {
        setIndex(oldId + 4);
      }else{
        setIndex(data.length-4);
      }
    }
  }

  return (
    <div id="projects-page">
      <Typography className="project-header-title" variant="h2" align="center">
        PROJECTS
      </Typography>
      {data.length > 0 && (
        <div className="domains">
          <Toolbar setDomain={setDomain} domain={domain}></Toolbar>
        </div>
      )}
      <Container fluid="md">
        <Container fluid>
          <Pagination>
            <Pagination.Prev onClick={handlePrevPage} />
            {Array.apply(null, Array(numPage)).map((_, id) => {
              return (
                <Pagination.Item active={activePage === id+1} onClick={() => handleChangePage(id + 1)}>
                  {id + 1}
                </Pagination.Item>
              )
            })}
            <Pagination.Next onClick={handleNextPage} />
          </Pagination>
          <Row className="my-3 projects-display-cards">
            {loading === true ? (
              <div className="project-error-div">
                <CircularProgress className="project-error-icon" />
              </div>
            ) : (
              <>
                {error === '' ? (
                  data.slice(index, index+4).map((ele, id) => (
                    <DisplayContent
                      setModalShow={setModalShow}
                      setCurrentData={setCurrentData}
                      ele={ele}
                      id={id}
                      key={id}
                    />
                  ))
                ) : (
                  <div className="project-error-div">
                    <ErrorIcon className="project-error-icon" />
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
          title={currentData?.name}
          members={currentData?.Members}
          info={currentData?.desc}
          image={currentData?.project_photo_url}
        />
      </Container>
      <FooterBar />
    </div>
  );
}
