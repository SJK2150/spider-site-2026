import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './Projects.css';
import Modal from '../Modal/Modal';
import Toolbar from '../DomainToolbar/Toolbar';
import axios from 'axios';
import data from './data.json'
export default function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [props, setProps] = React.useState({});
  // const [data, setData] = React.useState([]);
  const [domain,setDomain] = React.useState([].fill(false,0,4));
  const [modalCondn, setModalCondn] = React.useState([].fill(false, 0, data.length));
  const [displayAll,setDisplayAll] = React.useState(true);
  useEffect(() => {
    let arr = [];
    for(let i=0;i<4;i++){
      arr.push(false);
    }
    setDomain([...arr]);
  }, []);
  useEffect(()=>{
    let val = domain[0];
    for(let i=1;i<domain.length;i++){
      val = val || domain[i];
    }
    if(val){
      setDisplayAll(false);
    }else{
      setDisplayAll(true);
    }
  },[domain])

  const displayContent = (ele,id)=>{
    if (id % 2 == 0) {
      return (
        <Col className="proj-col" md={5}>
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card
                  style={{ background: '#141C3A' }}
                  className="text-white project-card"
                >
                  <div className='proj-image-bg'>
                      <Card.Img
                        className="project-image"
                        variant="top"
                        src={ele.projImg}
                      />
                  </div>
                  <Card.Body className="text-center project-body">
                    <motion.div>
                      <Card.Title className="project-title">{ele.projTitle}</Card.Title>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline-light"
                        onClick={() => {
                          modalDisplay(
                            ele.projTitle,
                            ele.projMembers,
                            ele.projInfo,
                            ele.projImage,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </AnimateSharedLayout>
        </Col>
      )
    } else {
      return (
        <Col md={7} className="proj-col">
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card
                  style={{ background: '#141C3A' }}
                  className="text-white project-card"
                >
                  <div className='proj-image-bg'>
                    <Card.Img
                      className="project-image"
                      variant="top"
                      src={ele.projImg}
                    />
                  </div>
                  <Card.Body className="text-center project-body">
                    <motion.div>
                      <Card.Title className="project-title">{ele.projTitle}</Card.Title>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="outline-light"
                        onClick={() => {
                          modalDisplay(
                            ele.projTitle,
                            ele.projMembers,
                            ele.projInfo,
                            ele.projImage,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </AnimateSharedLayout>
        </Col>
      )
    }
  }

  const modalDisplay = (title, members, info, image, layoutId, key) => {
    setProps({
      title: title,
      members: members,
      info: info,
      image: image,
      layoutId: layoutId,
    });
    setModalShow(true);
    let newArr = [...modalCondn];
    console.log(key);
    newArr.fill(false, 0, 4);
    newArr[Number(key) - 1] = true;
    setModalCondn(newArr);
  };
  const createModal = () => {
    return <Modal {...props} show={modalShow} onHide={() => setModalShow(false)}></Modal>;
  };
  return (
    <div id="projects-page">
      <Typography className='project-header' variant='h1' align='center'>Projects Page</Typography>
      <div className="domains">
        <Toolbar setDomain={setDomain}></Toolbar>
      </div>
      <Container fluid="md">
        <Container fluid>
          <Row className="my-3">
            {displayAll ? data.map((ele, id) => {
              return displayContent(ele,id);
            }):data.filter(e=>{
              return domain[e.domain];
            }).map((ele,id)=>{
              return displayContent(ele,id);
            })}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
