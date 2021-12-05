import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './Projects.css';
import Modal from '../Modal/Modal';
import axios from 'axios';
import data from './data.json'
export default function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [props, setProps] = React.useState({});
  // const [data, setData] = React.useState([]);
  const [modalCondn, setModalCondn] = React.useState([].fill(false, 0, 4));
  // useEffect(() => {
  //   axios.get('./data.json').then((res) => {
  //     setData(res.data);
  //   });
  // }, []);
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
      <Image
        className="project_banner"
        src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        fluid
      ></Image>
      <div className="domains">
        <div className="logo web"></div>
        <div className="logo app"></div>
        <div className="logo algo"></div>
        <div className="logo tronix"></div>
      </div>
      <Container fluid="md">
        <Container fluid>
          <Row className="my-3">
            {data.map((ele,id)=>{
              if(id%2 == 0){
                return(
                  <Col className="proj-col" md={5}>
                    <AnimateSharedLayout>
                      {modalShow && modalCondn[id] ? (
                        createModal()
                      ) : (
                        <motion.div className="motion-card" layoutId={`expandable-card-${id+1}`}>
                          <Card
                            style={{ background: '#141C3A' }}
                            className="text-white project-card"
                          >
                            <Card.Img
                              className="project-image"
                              variant="top"
                              src={ele.projImg}
                            />
                            <Card.Body className="text-center project-body">
                              <motion.div>
                                <Card.Title className="project-title">{ele.projTitle} {id}</Card.Title>
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
                                      `expandable-card-${id+1}`,
                                      `${id+1}`,
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
              }else{
                return(
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
                            <Card.Img
                              className="project-image"
                              variant="top"
                              src={ele.projImg}
                            />
                            <Card.Body className="text-center project-body">
                              <motion.div>
                                  <Card.Title className="project-title">{ele.projTitle} {id}</Card.Title>
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
              }
            })}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
