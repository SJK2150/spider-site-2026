import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Batch from './Batch';
import { motion } from 'framer-motion';
import { profile } from './All_members';
import './Profile.css';

function Profiles() {
  const [clickHardware, setClickHardware] = useState(false);
  const [clickSoftware, setClickSoftware] = useState(false);

  const handleClickHardware = () => {
    setClickHardware(!clickHardware);
  };
  const handleClickSoftware = () => {
    setClickSoftware(!clickSoftware);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <>
      <nav className="navbar">
        <motion.div
          className="menu-item"
          onMouseEnter={handleClickHardware}
          onMouseLeave={handleClickHardware}
        >
          <Button
            style={{ backgroundColor: 'GrayText', border: '2px solid gray', borderRadius: 7 }}
          >
            {profile[0]}
          </Button>
          <motion.div
            className="sub-menu"
            initial="exit"
            animate={clickHardware ? 'enter' : 'exit'}
            variants={subMenuAnimate}
          >
            {clickHardware && (
              <div>
                {Batch.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link className={item.cName}>{item.title}</Link>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="menu-item"
          onMouseEnter={handleClickSoftware}
          onMouseLeave={handleClickSoftware}
        >
          <Button
            style={{ backgroundColor: 'GrayText', border: '2px solid gray', borderRadius: 7 }}
          >
            {profile[3]}
          </Button>
          <motion.div
            className="sub-menu"
            initial="exit"
            animate={clickalgos ? 'enter' : 'exit'}
            variants={subMenuAnimate}
          >
            {clickSoftware && (
              <div>
                {Batch.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link className={item.cName}>{item.title}</Link>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
}
export default Profiles;
