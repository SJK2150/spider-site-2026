import { React , useState} from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Batch from './Batch';
import { motion } from "framer-motion";
import {profile} from './All_members';
import './Profile.css'

function Profiles(){

  const [clicktronix, setClicktronix] = useState(false);
  const [clickappdev, setClickappdev] = useState(false);
  const [clickwebdev, setClickwebdev] = useState(false);
  const [clickalgos, setClickalgos] = useState(false);

  const handleClickTronix=()=>{
    setClicktronix(!clicktronix)
  }
  const handleClickAppdev=()=>{
    setClickappdev(!clickappdev)
  }
  const handleClickWebdev=()=>{
    setClickwebdev(!clickwebdev)
  }
  const handleClickAlogs=()=>{
    setClickalgos(!clickalgos)
  }

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

    return (
      <>
        <nav className='navbar'>
        <motion.div
            className="menu-item"
            onMouseEnter={handleClickTronix}
            onMouseLeave={handleClickTronix}
          >
          <Button style={{backgroundColor:"GrayText", border: "2px solid gray" , borderRadius: 7}}> 
            {profile[0]}
          </Button> 
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={clicktronix ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
            {clicktronix && 
                <div>
                {Batch.map((item, index)=>{
                  return(
                    <div key={index}>
                      <Link className={item.cName}>
                        {item.title}
                      </Link>
                  </div>
               )
             })}
           </div>
            }
            </motion.div>
          </motion.div> 
        
          <motion.div
            className="menu-item"
            onMouseEnter={handleClickWebdev}
            onMouseLeave={handleClickWebdev}
          >
          <Button style={{backgroundColor:"GrayText", border: "2px solid gray" , borderRadius: 7}}> 
            {profile[1]}
          </Button> 
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={clickwebdev ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
            {clickwebdev && 
                <div>
                {Batch.map((item, index)=>{
                  return(
                    <div key={index}>
                      <Link className={item.cName}>
                        {item.title}
                      </Link>
                  </div>
               )
             })}
           </div>
            }
            </motion.div>
          </motion.div> 
         
          <motion.div
            className="menu-item"
            onMouseEnter={handleClickAppdev}
            onMouseLeave={handleClickAppdev}
          >
          <Button style={{backgroundColor:"GrayText", border: "2px solid gray" , borderRadius: 7}}> 
            {profile[2]}
          </Button> 
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={clickappdev ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
            {clickappdev && 
                <div>
                {Batch.map((item, index)=>{
                  return(
                    <div key={index}>
                      <Link className={item.cName}>
                        {item.title}
                      </Link>
                  </div>
               )
             })}
           </div>
            }
            </motion.div>
          </motion.div>
         
          <motion.div
            className="menu-item"
            onMouseEnter={handleClickAlogs}
            onMouseLeave={handleClickAlogs}
          >
          <Button style={{backgroundColor:"GrayText", border: "2px solid gray" , borderRadius: 7}}> 
            {profile[3]}
          </Button> 
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={clickalgos ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
            {clickalgos && 
                <div>
                {Batch.map((item, index)=>{
                  return(
                    <div key={index}>
                      <Link className={item.cName}>
                        {item.title}
                      </Link>
                  </div>
               )
             })}
           </div>
            }
            </motion.div>
          </motion.div>

        </nav>
      </>    
    );
}
export default Profiles;



