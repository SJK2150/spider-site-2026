import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './Projects.css';
import Modal from '../Modal/Modal';
import Toolbar from '../DomainToolbar/Toolbar';
// import axios from 'axios';
import FooterBar from '../Footer/footer-bottom';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';
// import data from './data.json'
import { getAllProjectsDetails } from '../api/requests';

function findData(data, hardware, software){


  let tempData = [];
  
  if(hardware === true){
    tempData = tempData.concat(data.hardware);
  }
  if(software === true){
    tempData = tempData.concat(data.software);
  }


  return tempData;
}

export default function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [props, setProps] = useState({});
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  const [domain, setDomain] = useState([false, false]);

  const [modalCondn, setModalCondn] = useState([].fill(false, 0, data.length));
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
  const fetchData = async ()=>{
    setLoading(true)
    const res = await getAllProjectsDetails();
    if(res){
      if(res.status && res.status === 500){
        setError('serverError')
      }
      else{
        if(res.length === 0){
          setError('emptyData')
        }
        setData(findData(res, true, true));
        setRes(res);
        
      }
      setLoading(false)
    }
    else{
      setError('cantConnect');
      setLoading(false);
    }
  }
  useEffect(()=>{
    if(res.length !== 0)
      setLoading(false);
  },[data])


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setData((data) => {
  //       if (data.length === 0) {
  //         setLoading(false);
  //         setError('dataEmpty');
  //       }
  //       return data;
  //     });
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const DisplayContent = ({ele, id}) => {
    if (id % 2 === 0) {
      return (
        <Col className="proj-col" key={id} sm={5}>
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card
                  className="text-white project-card"
                  onClick={() => {
                    modalDisplay(
                      ele.name,
                      ele.Members,
                      ele.desc,
                      ele.project_photo_url,
                      `expandable-card-${id + 1}`,
                      `${id + 1}`,
                    );
                  }}
                >
                  <div className="proj-image-bg">
                    <Card.Img className="project-image" variant="top" src={ele.project_photo_url} />
                  </div>
                  <Card.Body className="text-center project-body">
                    <motion.div>
                      <Card.Title className="project-title">{ele.name}</Card.Title>
                    </motion.div>
                    <div className="project-card-desc">{ele.desc}</div>
                    <span className="project-card-learn-more">{'Learn more =>'}</span>
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <button
                        className='project-card-button'
                        onClick={() => {
                          modalDisplay(
                            ele.name,
                            ele.Members,
                            ele.desc,
                            ele.project_photo_url,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                      >
                        Learn More
                      </button>
                    </motion.div> */}
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </AnimateSharedLayout>
        </Col>
      );
    } else {
      return (
        <Col sm={5} className="proj-col">
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card
                  className="text-white project-card"
                  onClick={() => {
                    modalDisplay(
                      ele.name,
                      ele.Members,
                      ele.desc,
                      ele.project_photo_url,
                      `expandable-card-${id + 1}`,
                      `${id + 1}`,
                    );
                  }}
                >
                  <div className="proj-image-bg">
                    <Card.Img className="project-image" variant="top" src={ele.project_photo_url} />
                  </div>
                  <Card.Body className="text-center project-body">
                    <motion.div>
                      <Card.Title className="project-title">{ele.name}</Card.Title>
                    </motion.div>
                    <div className="project-card-desc">{ele.desc}</div>
                    <span className="project-card-learn-more">{'Learn more =>'}</span>
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                      <button
                        className='project-card-button'
                        onClick={() => {
                          modalDisplay(
                            ele.name,
                            ele.Members,
                            ele.desc,
                            ele.project_photo_url,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                      >
                        Learn More
                      </button>
                    </motion.div> */}
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </AnimateSharedLayout>
        </Col>
      );
    }
  };

  const modalDisplay = (title, members, info, image, layoutId, key) => {
    let mem = members;
    let newMemberList = [];
    for (let i = 0; i < mem.length; i++) {
      newMemberList.push([mem[i].name, mem[i].photo_url]);
    }
    setProps({
      title: title,
      members: newMemberList,
      info: info,
      image: image,
      layoutId: layoutId,
    });
    setModalShow(true);
    let newArr = [...modalCondn];
    // console.log(key);
    newArr.fill(false, 0, 4);
    newArr[Number(key) - 1] = true;
    setModalCondn(newArr);
  };
  const createModal = () => {
    return <Modal {...props} show={modalShow} onHide={() => setModalShow(false)}></Modal>;
  };
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
          <Row className="my-3 projects-display-cards">
            {loading === true ? (
              <div className="project-error-div">
                <CircularProgress className="project-error-icon" />
              </div>
            ) : (
              <>
                {error === '' ? (
                    data.map((ele, id) => (
                         <DisplayContent ele={ele} id={id} key={id}  />
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
      </Container>
      <FooterBar />
    </div>
  );
}
