import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Achievements.css';
import Modal from '../Modal/Modal';
export default function Achievements() {
  const [modalShow, setModalShow] = React.useState(false);
  const [props, setProps] = React.useState({});
  const modalDisplay = (title, members, info, image) => {
    setProps({
      title: title,
      members: members,
      info: info,
      image: image,
    });
    setModalShow(true);
  };
  return (
    <div id="achv-page">
      <div className="achv-intro-section">
        <Image
          className="achv_banner"
          src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          fluid
        ></Image>
        <div className="display-3 achv_banner_title">Achievements</div>
      </div>
      <Container fluid="md">
        <Container fluid>
          <Row className="my-3">
            <Col md={5}>
              <Card
                style={{ background: 'rgba(163,163,163,0.23)' }}
                className="text-white achv-card"
              >
                <Card.Img
                  className="achv-image"
                  variant="top"
                  src="https://wallpaperaccess.com/full/2200497.jpg"
                />
                <Card.Body className="text-center achv-body">
                  <motion.div
                    whileHover={{
                      textShadow:
                        '1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)',
                    }}
                  >
                    <Card.Title className="achv-title">Achievement 1</Card.Title>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        modalDisplay(
                          'Fake News Detector',
                          ['Mem1', 'Mem2'],
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?',
                          'https://wallpaperaccess.com/full/2200497.jpg',
                        );
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="" md={7}>
              <Card
                style={{ background: 'rgba(163,163,163,0.23)' }}
                className="text-white achv-card"
              >
                <Card.Img
                  className="achv-image"
                  variant="top"
                  src="https://wallpaperaccess.com/full/2200497.jpg"
                />
                <Card.Body className="text-center achv-body">
                  <motion.div
                    whileHover={{
                      textShadow:
                        '1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)',
                    }}
                  >
                    <Card.Title className="achv-title">Achievement 2</Card.Title>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        modalDisplay(
                          'Image Segmentation using Spectral Clustering',
                          ['Mem1', 'Mem2'],
                          '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?',
                          'https://wallpaperaccess.com/full/2200497.jpg',
                        );
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="my-3">
            <Col md={7}>
              <Card
                style={{ background: 'rgba(163,163,163,0.23)' }}
                className="text-white achv-card"
              >
                <Card.Img
                  className="achv-image"
                  variant="top"
                  src="https://wallpaperaccess.com/full/2200497.jpg"
                />
                <Card.Body className="text-center achv-body">
                  <motion.div
                    whileHover={{
                      textShadow:
                        '1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)',
                    }}
                  >
                    <Card.Title className="achv-title">Achievement 1</Card.Title>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        modalDisplay(
                          'Fake News Detector',
                          ['Mem1', 'Mem2'],
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?',
                          'https://wallpaperaccess.com/full/2200497.jpg',
                        );
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="" md={5}>
              <Card
                style={{ background: 'rgba(163,163,163,0.23)' }}
                className="text-white achv-card"
              >
                <Card.Img
                  className="achv-image"
                  variant="top"
                  src="https://wallpaperaccess.com/full/2200497.jpg"
                />
                <Card.Body className="text-center achv-body">
                  <motion.div
                    whileHover={{
                      textShadow:
                        '1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)',
                    }}
                  >
                    <Card.Title className="achv-title">Achievement 2</Card.Title>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        modalDisplay(
                          'Image Segmentation using Spectral Clustering',
                          ['Mem1', 'Mem2'],
                          '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?',
                          'https://wallpaperaccess.com/full/2200497.jpg',
                        );
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Modals for the individual projects */}
      {Object.keys(props).length > 0 ? (
        <Modal {...props} show={modalShow} onHide={() => setModalShow(false)}></Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
