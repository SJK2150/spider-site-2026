import React from 'react'
import { Container, Row, Col, Image,Card,Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import './Projects.css';
import Modal from '../Modal/Modal';
export default function Projects() {
    const [modalShow, setModalShow] = React.useState(false);
    const [props,setProps] = React.useState({});
    const modalDisplay = (title,members,info,image)=>{
        setProps({
            title:title,
            members:members,
            info:info,
            image:image
        });
        setModalShow(true);
    }
    return (
        <div id="projects-page">
            <Image className="project_banner" src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" fluid></Image>
            <div className="domains">
                <div className="logo web">
                </div>
                <div className="logo app">
                </div>
                <div className="logo algo">
                </div>
                <div className="logo tronix">
                </div>
            </div>
            <Container fluid="md">
                <Container fluid>
                <Row className="my-3">
                    <Col md={5}>
                    <Card style={{background:'rgba(163,163,163,0.23)'}} className="text-white project-card">
                    <Card.Img className="project-image"  variant="top" src="https://spider.nitt.edu/images/Projects/Fake_real-1_gebpwg%20-%20Adithya%20Krishnakumar.png" />
                    <Card.Body className="text-center project-body">
                    <motion.div
                        whileHover={{
                            textShadow:"1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)"   
                        }}
                    >
                        <Card.Title className="project-title">Fake News Detector</Card.Title>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Button  variant="outline-light" onClick={()=>{
                    modalDisplay("Fake News Detector",["Mem1","Mem2"],"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?","https://spider.nitt.edu/images/Projects/Fake_real-1_gebpwg%20-%20Adithya%20Krishnakumar.png");
                    }}>Learn More</Button>
                    </motion.div>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="" md={7}>
                    <Card style={{background:'rgba(163,163,163,0.23)'}} className="text-white project-card">
                    <Card.Img className="project-image"  variant="top" src="https://spider.nitt.edu/images/Projects/SpectralClustering%20-%20Anagha%20Sethuraman.jpg" />
                    <Card.Body className="text-center project-body">
                    <motion.div
                        whileHover={{
                            textShadow:"1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)"   
                        }}
                    >
                        <Card.Title className="project-title">Image Segmentation using Spectral Clustering</Card.Title>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Button  variant="outline-light" onClick={()=>{
                        modalDisplay("Image Segmentation using Spectral Clustering",["Mem1","Mem2"],"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?","https://spider.nitt.edu/images/Projects/SpectralClustering%20-%20Anagha%20Sethuraman.jpg");}}>Learn More</Button>
                    </motion.div>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>
                <Container fluid>
                <Row>
                    <Col className="my-3" md={7}>
                    <Card style={{background:'rgba(163,163,163,0.23)'}} className="text-white project-card">
                    <Card.Img className="project-image"  variant="top" src="https://spider.nitt.edu/images/Projects/img%20-%20Ruphan%20S.jpeg" />
                    <Card.Body className="text-center project-body">
                    <motion.div
                        whileHover={{
                            textShadow:"1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)"   
                        }}
                    >
                        <Card.Title className="project-title">Project Braille</Card.Title>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Button  variant="outline-light" onClick={()=>{
                        modalDisplay("Project Braille",["Mem1","Mem2"],"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?","https://spider.nitt.edu/images/Projects/img%20-%20Ruphan%20S.jpeg");
                    }}>Learn More</Button>
                    </motion.div>
                    </Card.Body>
                    </Card>  
                    </Col>
                    <Col className="my-3" md={5}>
                    <Card style={{background:'rgba(163,163,163,0.23)'}} className="text-white project-card">
                    <Card.Img className="project-image"  variant="top" src="https://spider.nitt.edu/images/Projects/armadillo%20-%20Mukesh%20Gandhi.png" />
                    <Card.Body className="text-center project-body">
                    <motion.div
                        whileHover={{
                            textShadow:"1px 1px rgb(58, 58, 58), 2px 2px rgb(32, 32, 32), 3px 3px rgb(114, 114, 114), 4px 4px rgb(7, 7, 7), 5px 5px rgba(59, 59, 59, 0.48), 6px 6px rgba(29,29,29,0.91)"   
                        }}
                    >
                        <Card.Title className="project-title">Armadilo</Card.Title>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Button  variant="outline-light" onClick={()=>{
                        modalDisplay("Armadilo",["Mem1","Mem2"],"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum quasi assumenda delectus molestias aperiam esse magni accusantium sequi quos?","https://spider.nitt.edu/images/Projects/armadillo%20-%20Mukesh%20Gandhi.png");
                    }}>Learn More</Button>
                    </motion.div>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>
            </Container>
            {/* Modals for the individual projects */}
            <Modal
            {...props}
            show={modalShow}
            onHide={() => setModalShow(false)}
            >
            </Modal>
        </div>
    )
}
