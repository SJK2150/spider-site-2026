import { React , useState} from 'react';
import { motion , AnimateSharedLayout, AnimatePresence} from "framer-motion";
import './members.css';
import Batch from './Batch';
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}


function Members () {

  return(
    <Container>
    <h1 style={{color:"white", textAlign:"center", padding:15}}>Members</h1>
    <br/>
    <Batch/>
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
    style={{display:"flex", justifyContent:"space-around", padding:30}}
    >
      <CardColumns>
      <motion.div className="item" variants={item} >
      <motion.div
         whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <Card className="bg-dark text-white" style={{borderRadius: 100}}>
        <Card.Img src="https://picsum.photos/300/300" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </motion.div>
      
      </motion.div>
      <motion.div  className="item" variants={item} >
      <motion.div
         whileHover={{
          scale: 1.1,
          borderRadius: "100%",
          transition: { duration: 0.5 },
        }}
      >
        <Card className="bg-dark text-white" >
        <Card.Img src="https://picsum.photos/300/300" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </motion.div>
      
      </motion.div>
      <motion.div  className="item" variants={item} >
      <motion.div
         whileHover={{
          scale: 1.1,
          borderRadius: "100%",
          transition: { duration: 0.5 },
        }}
      >
        <Card className="bg-dark text-white" >
        <Card.Img src="https://picsum.photos/300/300" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </motion.div>
      
      </motion.div>

      
      
      </CardColumns>
  </motion.ul>  
   </Container>    
);
}
  

export default Members