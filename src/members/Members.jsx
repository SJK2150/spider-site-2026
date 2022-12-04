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
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';

import Toolbar from '../DomainToolbar/Toolbar';
import FooterBar from '../Footer/footer-bottom';

import { getAllMembersDetails } from '../api/requests';

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
  ['2022-23', 4],
  ['2023-24', 3],
  ['2024-25', 2],
  ['MCA', 'MCA'],
];

function Members() {
  const [yearName, setYearName] = useState('All');
  // const [ProfileName, setProfileName] = useState('All');
  // const [clickHardware, setClickHardware] = useState(false);
  // const [clickSoftware, setClickSoftware] = useState(false);
  // const [domain, setDomain] = useState([true, false]);
  const [domain, setDomain] = useState([false, false, false, false]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [displayAll, setDisplayAll] = useState(true);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(false);
    }
    setDomain([...arr]);
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(domain);
    let val = domain[0];
    for (let i = 1; i < domain.length; i++) {
      val = val || domain[i];
    }
    if (val) {
      setDisplayAll(false);
    } else {
      setDisplayAll(true);
    }
    setYearName('All');
  }, [domain]);

  const fetchData = async () => {
    setLoading(true);
    const res = await getAllMembersDetails();
    // console.log(res);
    if (res) {
      if (res.status && res.status === 500) {
        setError(true);
      } else {
        setData(res);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setData((data) => {
        if (data.length === 0) {
          setLoading(false);
          //setError(true);
        }
        return data;
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // const handleClickHardware = () => {
  //   setClickSoftware(false);
  //   setClickHardware(!clickHardware);
  //   setDomain([true, false]);
  //   setProfileName((profileName)=>{
  //     if(profileName === 'All'){
  //       return 'Hardware'
  //     }else{
  //       return 'All'
  //     }
  //   });
  // };

  // const handleClickSoftware = () => {
  //   setClickHardware(false);
  //   setClickSoftware(!clickSoftware);
  //   setDomain([false, true]);
  //   setProfileName((profileName)=>{
  //     if(profileName === 'All'){
  //       return 'Software'
  //     }else{
  //       return 'All'
  //     }
  //   });
  // };

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

  const DisplayYearNav = () => {
    return (
      <Nav variant="tabs" defaultActiveKey="All" style={{ justifyContent: 'space-between' }}>
        {year.map((item, idx) => {
          return (
            <motion.div
              initial="exit"
              animate={1 ? 'enter' : 'exit'}
              variants={subMenuAnimate}
              custom={idx}
              key={idx}
              style={{ margin: '20px auto' }}
           
            >
              <Nav.Item className="batch_item">
                <Nav.Link
                  onClick={(e) => {
                    setYearName(item[1]);
                    // console.log(e, item);
                  }}
                  eventKey={item[1]}
                  
                  style={
                    yearName === item[1]
                      ? { background: '#6d4dff', color: 'white' }
                      : { background: 'none', color: 'white' }
                  }
                >
                  {item[0]}
                </Nav.Link>
              </Nav.Item>
            </motion.div>
          );
        })}
      </Nav>
    );
  };

  // const handleYearClick = (e, yr) => {
  //   setYearName(yr);
  // };
  // console.log(yearName, ProfileName)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="members-container">
      <Router>
        <h1 className="members_banner_title">MEMBERS</h1>
        <br />

        <>
          {data.length > 0 && (
            <div className="domains">
              <Toolbar setDomain={setDomain} domain={domain}></Toolbar>
            </div>
          )}
          {/* <div className="d-flex justify-content-around">
            <motion.div className="menu-item ">
              <button onClick={handleClickHardware} className="HardwareIcon btn shadow-none mx-4">
                <img src="images/hardware.png" />
              </button>
            </motion.div>
            <motion.div className="menu-item">
              <button onClick={handleClickSoftware} className="SoftwareIcon btn shadow-none mx-4">
                <img src="images/software.png" />
              </button>
            </motion.div>
          </div> */}
          <div className="my-4">{displayAll === false && <DisplayYearNav />}</div>
        </>
        {loading === true ? (
          <div className="member-error-div">
            <CircularProgress className="member-error-icon" />
          </div>
        ) : (
          <>
            {error === false ? (
              <AnimatePresence initial={true}>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <CardColumns>
                    <Container fluid="lg">
                      {data
                        .filter((e) => {
                          if (displayAll === false) {
                            if (e.domain === 'TRONIX') {
                              return domain[0];
                            }
                            if (
                              e.domain === 'WEBDEV' ||
                              e.domain === 'ALGOS' ||
                              e.domain === 'APPDEV'
                            ) {
                              return domain[1];
                            }
                          } 
                          return true;
                        })
                        .filter((member) => {
                          if (yearName === 'All') {
                            return true;
                          } else {
                            if (member.degree !== 'BTECH') {
                              if (yearName === 'MCA') {
                                return true;
                              }
                            } else {
                              if (member.year === yearName) {
                                return true;
                              }
                              return false;
                            }
                          }
                          return false;
                        })
                        .map((member, id) => (
                          <MemberCard member={member} id={id}></MemberCard>
                        ))}
                    </Container>
                  </CardColumns>
                </motion.div>
              </AnimatePresence>
            ) : (
              <>
                <div className="member-error-div">
                  <ErrorIcon className="member-error-icon" />
                  <div>
                    <h3>Error</h3>
                    <h5>Cannot connect to Server!</h5>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Router>
      <FooterBar />
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
      <Card className="text-white" style={{ background: 'none' }}>
        <div
          className="member_card"
          style={
            isHover
              ? { filter: 'blur(5px)', opacity: '50%', scale: '100%', overflow: 'hidden' }
              : { overflow: 'hidden',   outline:"1px solid rgba(207,207,207,0.3)"  }
          }
        >
          <Card.Img src={member.photo_url} alt={member.name} style={isHover ?{scale:'110%', transition:'0.3s'}:{}} />
          <Card.Title className="member_name" style={{ textAlign: 'center' }}>
            {member.name}
          </Card.Title>
        </div>
       
          <div style={isHover?{opacity:'100%', transition:'all 0.3s ease-in-out'}:{opacity:'0'}}>
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
                {member.name}
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
              className="members-hoverLinks"
            >
              <div className="iconLinks">
                {member.linkedin_url ? (
                  <a href={member.linkedin_url}>
                    <IconButton>
                      <LinkedInIcon fontSize="large" className="member-card-links" />
                    </IconButton>
                  </a>
                ) : (
                  <IconButton>
                    <LinkedInIcon fontSize="large" className="member-card-links" />
                  </IconButton>
                )}
                {member.website_url ? (
                  <a href={member.website_url}>
                    <IconButton>
                      <LanguageIcon className="member-card-links" fontSize="large" />
                    </IconButton>
                  </a>
                ) : (
                  <IconButton>
                    <LanguageIcon className="member-card-links" fontSize="large" />
                  </IconButton>
                )}
                {member.github_url ? (
                  <a href={member.github_url}>
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
        
      </Card>
      <br></br>
    </motion.div>
  );
};
