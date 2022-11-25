import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './Projects.css';
import Modal from '../Modal/Modal';
import Toolbar from '../DomainToolbar/Toolbar';
import axios from 'axios';
import FooterBar from '../Footer/footer-bottom';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';
// import data from './data.json'
import { getAllProjectsDetails } from '../api/requests';
export default function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [props, setProps] = React.useState({});
  const [data, setData] = React.useState([]);
  const [domain, setDomain] = React.useState([].fill(false, 0, 2));
  const [modalCondn, setModalCondn] = React.useState([].fill(false, 0, data.length));
  const [displayAll,setDisplayAll] = React.useState(true);
  const [error, setError] = React.useState(false)
  const [domainMap,setDomainMap] = React.useState({
    "TRONIX":0,
    "WEBDEV":1,
    "ALGOS":2,
    "APPDEV":3
  });
  useEffect(() => {
    fetchData();
    let arr = [];
    for (let i = 0; i < 2; i++) {
      arr.push(false);
    }
    setDomain([...arr]);
  }, []);
  useEffect(() => {
    let val = domain[0];
    for (let i = 1; i < domain.length; i++) {
      val = val || domain[i];
    }
    if (val) {
      setDisplayAll(false);
    } else {
      setDisplayAll(true);
    }
  }, [domain]);

  const [loading, setLoading] = React.useState(false)
  const fetchData = async () => {
    setLoading(true)
    const res = await getAllProjectsDetails();
    console.log(res);
    if(res){
      if(res.status && res.status == 500){
        setError(true)
      }
      else{
        setData(res);
      }
      setLoading(false)
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(data=>{
        if(data.length == 0){
          setLoading(false)
          setError(true)
        }
        return data
      })
      
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const displayContent = (ele,id)=>{
    if (id % 2 == 0) {
      return (
        <Col className="proj-col" sm={5} >
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card className="text-white project-card"
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
                    <div className='project-card-desc'>
                      {ele.desc}
                    </div>
                    <span className='project-card-learn-more' >{"Learn more =>"}</span>
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
                <Card className="text-white project-card"
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
                    <div className='project-card-desc'>
                      {ele.desc}
                    </div>
                    <span className='project-card-learn-more' >{"Learn more =>"}</span>
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
      {data.length>0 &&
      <div className="domains">
        <Toolbar setDomain={setDomain} domain={domain}></Toolbar>
      </div>
      }
      <Container fluid="md">
        <Container fluid>
          <Row className="my-3 projects-display-cards">

          {loading==true? <div className='project-error-div' ><CircularProgress className='project-error-icon'/></div>:<>
          {error==false ? displayAll 
              ? data.map((ele, id) => {
                  return displayContent(ele, id);
                })
              : data
                  .filter((e) => {
                    if(e.domain == 'TRONIX'){
                      return domain[0];
                    }
                    if(e.domain == 'WEBDEV' || e.domain == 'ALGOS' || e.domain == 'APPDEV'){
                      return domain[1] ;
                    }
                  })
                  .map((ele, id) => {
                    return displayContent(ele, id);
                  }):
                  <div className='project-error-div'>
                      <ErrorIcon className='project-error-icon'/>
                      <div>
                        <h3 >Error</h3>
                        <h5 >Cannot connect to Server!</h5>
                      </div>
                    </div>
                  }
                  </>}
          </Row>
        </Container>
      </Container>
      <FooterBar />
    </div>
  );
}
