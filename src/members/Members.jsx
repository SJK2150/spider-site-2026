import { React, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { BrowserRouter as Router } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { members } from './All_members';
import './members.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { type: 'tween', duration: 0.8 },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'tween', duration: 0.8 },
  },
};

const year = [
  ['All', 'All'],
  ['B Tech 4th year', '2020-21'],
  ['B Tech 3rd Year', '2021-22'],
  ['B Tech 2nd Year', '2022-23'],
  ['MCA 2nd year', 'MCA'],
];

function Members() {
  const [yearName, setYearName] = useState('All');
  const [ProfileName, setProfileName] = useState('Hardware');
  const [clickHardware, setClickHardware] = useState(false);
  const [clickSoftware, setClickSoftware] = useState(false);
  const [domain, setDomain] = useState([true, false]);

  const handleClickHardware = () => {
    setClickSoftware(false);
    setClickHardware(!clickHardware);
    setDomain([true, false]);
    setProfileName('Hardware');
  };

  const handleClickSoftware = () => {
    setClickHardware(false);
    setClickSoftware(!clickSoftware);
    setDomain([false, true]);
    setProfileName('Software');
  };

  const subMenuAnimate = {
    enter: (i) => ({
      opacity: 1,
      transition: {
        duration: i * 0.8,
      },
      display: 'block',
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
      },
      // display: "none"
    },
  };

  const displayYearNav = (index) => {
    const domainCond = [clickHardware, clickSoftware];
    if (domainCond[index]) {
      return (
        <Nav variant="tabs" defaultActiveKey="All" style={{ justifyContent: 'space-between' }}>
          {year.map((item, idx) => {
            if (index === 0 && idx === 4) {
              return <></>;
            }
            return (
              <motion.div
                initial="exit"
                animate={domainCond[index] ? 'enter' : 'exit'}
                variants={subMenuAnimate}
                custom={idx}
                key={idx}
              >
                <Nav.Item className="batch_item">
                  <Nav.Link onClick={(e) => handleYearClick(e, item[0])} eventKey={item[1]}>
                    {item[1]}
                  </Nav.Link>
                </Nav.Item>
              </motion.div>
            );
          })}
        </Nav>
      );
    } else {
      return <></>;
    }
  };

  const handleYearClick = (e, yr) => {
    setYearName(yr);
  };
  // console.log(yearName, ProfileName)

  return (
    <Container className="container">
      <Router>
        <h1
          style={{
            color: 'white',
            textAlign: 'center',
            padding: 15,
            fontSize: 55,
            fontWeight: 600,
          }}
        >
          Members
        </h1>
        <br />
        <>
          <nav className="navbar">
            <motion.div className="menu-item ">
              <button onClick={handleClickHardware} className="HardwareIcon btn shadow-none mx-5">
                <img src="images/hardware.png" />
              </button>
            </motion.div>
            <motion.div className="menu-item">
              <button onClick={handleClickSoftware} className="SoftwareIcon btn shadow-none mx-5">
                <img src="images/software.png" />
              </button>
            </motion.div>
          </nav>
          {displayYearNav(domain.findIndex((e) => e === true))}
        </>
        <AnimatePresence initial={true}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}
          >
            <CardColumns>
              <Container fluid="lg">
                {members
                  .filter((member) => member.Profile === ProfileName)
                  .filter((member) => member.Year === yearName)
                  .map((member, id) => (
                    <motion.div className="item" variants={item} key={`member_${id}`}>
                      <Card
                        className="bg-dark text-white member_card"
                        style={{ margin: 20, background: '#141C3A' }}
                      >
                        <Card.Img src={member.Photo} alt={member.Name} />
                        <Card.Title
                          className="member_name"
                          style={{ background: '#141C3A', textAlign: 'center' }}
                        >
                          {member.Name}
                        </Card.Title>
                        <Card.Body style={{ background: '#141C3A' }}>
                          <Card.Text style={{ background: '#141C3A' }} className="iconLinks">
                            {member.LinkedIn ? (
                              <a href={member.LinkedIn}>
                                <IconButton>
                                  <LinkedInIcon fontSize="large" className="buttonlinkedInIcon" />
                                </IconButton>
                              </a>
                            ) : (
                              <IconButton>
                                <LinkedInIcon fontSize="large" className="buttonlinkedInIcon" />
                              </IconButton>
                            )}
                            {member.Website ? (
                              <a href={member.Website}>
                                <IconButton>
                                  <LanguageIcon className="buttonwebIcon" fontSize="large" />
                                </IconButton>
                              </a>
                            ) : (
                              <IconButton>
                                <LanguageIcon className="buttonwebIcon" fontSize="large" />
                              </IconButton>
                            )}
                            {member.Github ? (
                              <a href={member.Github}>
                                <IconButton>
                                  <GitHubIcon className="buttongithubIcon" fontSize="large" />
                                </IconButton>
                              </a>
                            ) : (
                              <IconButton>
                                <GitHubIcon className="buttongithubIcon" fontSize="large" />
                              </IconButton>
                            )}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <br></br>
                    </motion.div>
                  ))}
              </Container>
            </CardColumns>
          </motion.div>
        </AnimatePresence>
      </Router>
    </Container>
  );
}

export default Members;
