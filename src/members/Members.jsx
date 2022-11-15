import { React , useEffect, useState} from 'react';
import { motion , AnimatePresence} from "framer-motion";
import { Container,Button, Nav, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { BrowserRouter as Router } from "react-router-dom";
import MemoryIcon from '@material-ui/icons/Memory';
import PublicIcon from '@material-ui/icons/Public';
import AndroidIcon from '@material-ui/icons/Android';
import HardwareIcon from "../assets/members-icon1.svg"
import SoftwareIcon from "../assets/members-icon2.svg"
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { members } from "./All_members";
import './members.css';
import FooterBar from '../Footer/footer-bottom';
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}
  
const item = {
  hidden: { 
    scale:0, 
    opacity: 0,
    transition: { type: 'tween', duration:0.8 }
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'tween', duration:0.8 }
  }
}

const year = [
  ["All", "All"],
  ["B Tech 4th year", "2020-21"],
  ["B Tech 3rd Year","2021-22"],
  ["B Tech 2nd Year", "2022-23"],
  ["MCA 2nd year","MCA"],
];

function Members () {
  const [yearName,setYearName]= useState("All");
  const [ProfileName,setProfileName]= useState("All");
  const [clicktronix, setClicktronix] = useState(false);
  const [clickappdev, setClickappdev] = useState(false);
  const [clickwebdev, setClickwebdev] = useState(false);
  const [clickalgos, setClickalgos] = useState(false);
  const [domain, setDomain] = useState([true,false,false,false])
  // const handleClickTronix=()=>{
  //   setClickappdev(false);
  //   setClickwebdev(false);
  //   setClickalgos(false);
  //   setClicktronix(!clicktronix);
  //   setDomain([true,false,false,false]);
  //   setProfileName("Tronix");
  // }
  // const handleClickAppdev=()=>{
  //   setClicktronix(false);
  //   setClickwebdev(false);
  //   setClickalgos(false);
  //   setClickappdev(!clickappdev);
  //   setDomain([false,false,true,false])
  //   setProfileName("App Dev");
  // }
  // const handleClickWebdev=()=>{
  //   setClicktronix(false);
  //   setClickappdev(false);
  //   setClickalgos(false);
  //   setClickwebdev(!clickwebdev)
  //   setDomain([false,true,false,false])
  //   setProfileName("Web Dev");
  // }
  // const handleClickAlogs=()=>{
  //   setClicktronix(false);
  //   setClickwebdev(false);
  //   setClickappdev(false);
  //   setClickalgos(!clickalgos);
  //   setDomain([false,false,false,true])
  //   setProfileName("Algos");
  // }

  const handleClickSoftware = () => {
    setClicktronix(false);
    setClickwebdev(!clickwebdev);
    setClickappdev(!clickappdev);
    setClickalgos(!clickalgos);
    setDomain([false,true,true,true])
    if(ProfileName=='Software'){
      setProfileName('All')
    }
    else{
      setProfileName("Software");
    }
  }

  const handleClickHardware = () => {
    setClickappdev(false);
    setClickwebdev(false);
    setClickalgos(false);
    setClicktronix(!clicktronix);
    setDomain([true,false,false,false]);
    if(ProfileName=='Hardware'){
      setProfileName('All')
    }
    else{
      setProfileName("Hardware");
    }
  }

  const subMenuAnimate = {
    enter: (i) => ({
      opacity: 1,
      transition: {
        duration: i * 0.8
      },
      display: "block"
    }
    ),
    exit: {
      opacity: 0,
      transition: {
        duration: 2
      },
      // display: "none"
    }
  };

  const displayYearNav = (index)=>{
    const domainCond = [clicktronix,clickwebdev,clickappdev,clickalgos];
    if(domainCond[index]){
      return (
        <Nav variant="tabs" defaultActiveKey="All" style={{justifyContent:"space-between"}}>
          {year.map((item, idx) => {

            if(index === 0 && idx === 4){
              return (<></>)
            }
            return (
              <motion.div
                initial="exit"
                animate={domainCond[index] ? "enter" : "exit"}
                variants={subMenuAnimate}
                custom={idx}
                key={idx}>
                <Nav.Item className="batch_item">
                  <Nav.Link onClick={((e) => handleYearClick(e, item[0]))} eventKey={item[1]}>{item[1]}</Nav.Link>
                </Nav.Item>
              </motion.div>
            )
          })}
        </Nav>
      )
    }else{
      return(
        <></>
      )
    }
  }

  const handleYearClick =(e, yr)=>{
    setYearName(yr); 
  }
// console.log(yearName, ProfileName)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <div  id="members-page">
    <Container className="container">
      <Router>
      <h1 className='members-page-title'>MEMBERS</h1>
    <br/>
    <>
    <nav className='members-navbar'>
        {/*<motion.div
            className="menu-item"
        >
          <Button onClick={handleClickTronix} className="tronixIcon"> 
            <MemoryIcon fontSize="large" />
            <br/>
            <p className="label">Tronix</p>
          </Button> 
          </motion.div>
          <motion.div
            className="menu-item"
          >
          <Button onClick={handleClickWebdev} className="members-btnIcon"> 
            <PublicIcon fontSize="large"/>
            <br/>
            <p className="label">Web Dev</p>
          </Button> 
          </motion.div> 
          <motion.div
            className="menu-item"
          >
          <Button  onClick={handleClickAppdev} className="members-btnIcon"> 
            <AndroidIcon fontSize="large" />
            <br/>
            <p className="label">App Dev</p>
          </Button> 
          </motion.div>
          <motion.div
            className="menu-item"
          >
          <Button onClick={handleClickAlogs} className="members-btnIcon"> 
            <AccountTreeIcon fontSize="large" />
            <br/>
            <p className="label">Algos</p>
          </Button> 
          </motion.div> */}
          <motion.div
            className="menu-item"
        >
          <button onClick={handleClickHardware} className="members-btnIcon" style={ProfileName == "Hardware" ? {backgroundColor:'rgba(106,66,193,1)'}:{}}> 
            <img src={HardwareIcon} />
            <br/>
            <p className="label">HARDWARE</p>
          </button> 
          </motion.div>
          <motion.div
            className="menu-item"
        >
          <button onClick={handleClickSoftware} className="members-btnIcon" style={ProfileName == "Software" ? {backgroundColor:'rgba(106,66,193,1)'}:{}}> 
          <img src={SoftwareIcon} />
            <br/>
            <p className="label">SOFTWARE</p>
          </button> 
          </motion.div>
        </nav>
        {displayYearNav(domain.findIndex(e=> e===true))}
      </>  
    <AnimatePresence initial={true}>
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    style={{display:"flex", justifyContent:"space-around", padding:30}}
    >  
    <CardColumns>
      <Container fluid="lg">
        {members
        .filter(member => (ProfileName == 'All'? member : (ProfileName == 'Software' ? (member.Profile === 'Algos'||'App Dev'||'Web Dev') : (member.Profile ==='Tronix'))))
        .filter(member => member.Year === yearName)
        .map((member,id) => (
        <motion.div className="item"
          variants={item}
          key={`member_${id}`}
        >
          <Card className="bg-dark text-white member_card" style={{ margin: 20, background: '#141C3A'}}>
          <Card.Img src={member.Photo} alt={member.Name} />
          <Card.Title className="member_name" style={{ background: '#141C3A', textAlign:"center"}}>{member.Name}</Card.Title>
          <Card.Body style={{ background: '#141C3A'}}>
          <Card.Text style={{ background: '#141C3A'}} className="iconLinks">
                  {member.LinkedIn ? (
                    <a href={member.LinkedIn}>
                      <IconButton >
                        <LinkedInIcon fontSize="large" className="buttonlinkedInIcon"/>
                      </IconButton>
                    </a>
                  ) : (
                    <IconButton>
                      <LinkedInIcon fontSize="large" className="buttonlinkedInIcon"/>
                    </IconButton>
                  )}
                  {member.Website ? (
                    <a href={member.Website}>
                      <IconButton>
                        <LanguageIcon className="buttonwebIcon" fontSize="large"/>
                      </IconButton>
                    </a>
                  ) : (
                    <IconButton >
                      <LanguageIcon className="buttonwebIcon" fontSize="large"/>
                    </IconButton>
                  )}
                  {member.Github ? (
                    <a href={member.Github}>
                      <IconButton >
                        <GitHubIcon className="buttongithubIcon" fontSize="large"/>
                      </IconButton>
                    </a>
                  ) : (
                    <IconButton>
                      <GitHubIcon className="buttongithubIcon" fontSize="large"/>
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
   <FooterBar />
   </div>
)};

export default Members;