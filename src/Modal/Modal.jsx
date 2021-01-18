import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalBody, ModalFooter, ModalTitle, Button, Image, ModalDialog } from 'react-bootstrap';
const backdrop = {
  visible: {
    opacity: 1,
    transition: {
      from: 0,
      duration: 1,
    },
  },
  hidden: { opacity: 0 },
};
const modal = {
  hidden: {
    // opacity:0,
    // scale:0,
    transition: { type: 'spring', stiffness: 120 },
  },
  visible: {
    // opacity:1,
    // scale:1,
    transition: { type: 'spring', stiffness: 120 },
  },
};
export default function Modal(props) {
  const { show, onHide, title, members, info, image, layoutId } = props;
  return (
    <motion.div
      className="backdrop"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layoutId={layoutId}
    >
      <motion.div className="custom-modal" variants={modal}>
        <ModalDialog scrollable centered size="lg">
          <ModalHeader className="modal-title">
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <Image className="modal-image" height="280px" width="80%" src={image}></Image>
          <ModalBody className="modal-details">
            <div className="modal-members">
              {members.map((member) => {
                return <p>{member}</p>;
              })}
            </div>
            <p className="modal-info">
              {info}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum quae harum est
              quasi ratione! Quam, laudantium suscipit nulla iste distinctio dicta dolores beatae
              odit eaque nesciunt eveniet, perspiciatis maiores?
            </p>
          </ModalBody>
          <ModalFooter className="custom-modal-footer">
            <Button
              variant="primary"
              onClick={() => {
                onHide();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalDialog>
      </motion.div>
    </motion.div>
  );
}
