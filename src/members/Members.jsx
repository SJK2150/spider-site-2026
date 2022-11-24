import { React, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Typography from '@material-ui/core/Typography';
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
  const [ProfileName, setProfileName] = useState('All');
  const [clickHardware, setClickHardware] = useState(false);
  const [clickSoftware, setClickSoftware] = useState(false);
  const [domain, setDomain] = useState([true, false]);

  const handleClickHardware = () => {
    setClickSoftware(false);
    setClickHardware(!clickHardware);
    setDomain([true, false]);
    setProfileName((profileName)=>{
      if(profileName == 'All'){
        return 'Hardware'
      }else{
        return 'All'
      }
    });
  };

  const handleClickSoftware = () => {
    setClickHardware(false);
    setClickSoftware(!clickSoftware);
    setDomain([false, true]);
    setProfileName((profileName)=>{
      if(profileName == 'All'){
        return 'Software'
      }else{
        return 'All'
      }
    });
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
            {/* if (index === 0 && idx === 4) {
              return <></>;
            } */}
            return (
              <motion.div
                initial="exit"
                animate={domainCond[index] ? 'enter' : 'exit'}
                variants={subMenuAnimate}
                custom={idx}
                key={idx}
                style={{margin:'20px auto'}}
              >
                <Nav.Item className="batch_item" >
                  <Nav.Link onClick={(e) => handleYearClick(e, item[0])} eventKey={item[1]} style={yearName==item[0]?{background:'#6d4dff' , color:'white'}:{}}>
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="members-container">
      <Router>
        <h1
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
                  .filter((member) => ProfileName === 'All'? member:  member.Profile === ProfileName)
                  .filter((member) => member.Year === yearName)
                  .map((member, id) => (
                    <MemberCard member={member} id={id}></MemberCard>
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

const MemberCard = ({ member, id }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className="item"
      variants={item}
      key={`member_${id}`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Card
        className="text-white"
        style={{background:'none'}}
      >
      <div className='member_card'  style={isHover ? { filter: 'blur(5px)', opacity: '50%', scale: '100%' } : {}}>
        <Card.Img src={member.Photo} alt={member.Name} />
        <Card.Title className="member_name" style={{ textAlign: 'center' }}>
          {member.Name}
        </Card.Title>
        </div>
        {isHover && (
          <div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              className="members-hoverBorder"
            ></div>
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontFamily: 'MontserratBold', textAlign: 'center' }}
              >
                {member.Name}
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                {members.Role}
              </Typography>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <div className="iconLinks">
                {member.LinkedIn ? (
                  <a href={member.LinkedIn}>
                    <IconButton>
                      <LinkedInIcon fontSize="large" className="member-card-links" />
                    </IconButton>
                  </a>
                ) : (
                  <IconButton>
                    <LinkedInIcon fontSize="large" className="member-card-links" />
                  </IconButton>
                )}
                {member.Website ? (
                  <a href={member.Website}>
                    <IconButton>
                      <LanguageIcon className="member-card-links" fontSize="large" />
                    </IconButton>
                  </a>
                ) : (
                  <IconButton>
                    <LanguageIcon className="member-card-links" fontSize="large" />
                  </IconButton>
                )}
                {member.Github ? (
                  <a href={member.Github}>
                    <IconButton>
                      <GitHubIcon className="member-card-links" fontSize="large" />
                    </IconButton>
                  </a>
                ) : (
                  <IconButton>
                    <GitHubIcon className="member-card-links" fontSize="large" />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        )}
      </Card>
      <br></br>
    </motion.div>
  );
};
