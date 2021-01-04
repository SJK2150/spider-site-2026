import React from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import './index.css';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalBody, ModalFooter, ModalTitle,Button,Image, ModalDialog } from 'react-bootstrap';
const backdrop = {
    visible: {opacity:1},
    hidden: {opacity:0}
}
const modal = {
    hidden:{
        y: "-100vh",
        opacity:0,
        transition: {type: "spring", stiffness: 120}
    },
    visible: {
        y: "0px",
        opacity:1,
        transition: {delay: 0.5,type: "spring", stiffness: 120}
    }
}
export default function index(props) {
    const {show,onHide,title,members,info,image} = props;
    return (
        <AnimatePresence exitBeforeEnter>
            {show && (
                <motion.div className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                <motion.div className="custom-modal"
                 variants={modal}
                >
                <ModalDialog centered size="lg">
                <ModalHeader className="modal-title">
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <Image className="modal-image" height="280px" width="100%" src={image}></Image>
                <ModalBody>
                <div className="modal-members">
                {members.map((member)=>{
                    return(<p>{member}</p>);
                })}
                </div>
                <p className="modal-info">
                {info}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum quae harum est quasi ratione! Quam, laudantium suscipit nulla iste distinctio dicta dolores beatae odit eaque nesciunt eveniet, perspiciatis maiores?
                </p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary" onClick={()=>{
                        onHide();
                        console.log("Clicked");
                    }}>Close</Button>
                </ModalFooter>
                </ModalDialog>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
