import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './Achievements.css';
import Modal from '../Modal/Modal';
import data from './data.json';
export default function Achievements() {
  const [modalShow, setModalShow] = React.useState(false);
  const [props, setProps] = React.useState({});
  const [modalCondn, setModalCondn] = React.useState([].fill(false, 0, 4));
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
    newArr.fill(false, 0, 4);
    newArr[Number(key) - 1] = true;
    setModalCondn(newArr);
  };
  const createModal = () => {
    return <Modal {...props} show={modalShow} onHide={() => setModalShow(false)}></Modal>;
  };
  return (
    <div id="achv-page">
      <div className="achv-intro-section">
        {/* <Image
          className="achv_banner"
          src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          fluid
        ></Image> */}
        <div className="display-3 achv_banner_title">Achievements</div>
      </div>
      <Container fluid="md">
        <Container fluid>
          <Row>
            {data.map((ele,id)=>{
              if(id%2 == 0){
                return(
                  <Col className="my-3" md={5}>
                    <AnimateSharedLayout>
                      {modalShow && modalCondn[id] ? (
                        createModal()
                      ) : (
                          <motion.div className="motion-card" layoutId={`expandable-card-${id+1}`}>
                          <Card
                              style={{ background: '#141C3A' }}
                            className="text-white achv-card"
                          >
                            <Card.Img
                              className="achv-image"
                              variant="top"
                              src={ele.image}
                            />
                            <Card.Body className="text-center achv-body">
                              <motion.div>
                                <Card.Title className="achv-title">{ele.title}</Card.Title>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="outline-light"
                                  onClick={() => {
                                    modalDisplay(
                                      ele.title,
                                      ele.members,
                                      ele.desc,
                                      ele.image,
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
                  <Col className="my-3" md={7}>
                    <AnimateSharedLayout>
                      {modalShow && modalCondn[id] ? (
                        createModal()
                      ) : (
                        <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                          <Card
                            style={{ background: '#141C3A' }}
                            className="text-white achv-card"
                          >
                            <Card.Img
                              className="achv-image"
                              variant="top"
                              src={ele.image}
                            />
                            <Card.Body className="text-center achv-body">
                              <motion.div>
                                <Card.Title className="achv-title">{ele.title}</Card.Title>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="outline-light"
                                  onClick={() => {
                                    modalDisplay(
                                      ele.title,
                                      ele.members,
                                      ele.desc,
                                      ele.image,
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
