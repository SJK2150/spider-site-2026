import { React , useState, useEffect} from 'react';
import { motion , AnimateSharedLayout, AnimatePresence} from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { BrowserRouter as Router } from "react-router-dom";
import MemoryIcon from '@material-ui/icons/Memory';
import PublicIcon from '@material-ui/icons/Public';
import AndroidIcon from '@material-ui/icons/Android';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { members } from "./All_members";
import './members.css';

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
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
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
  const [ProfileName,setProfileName]= useState("Tronix");
  const [clicktronix, setClicktronix] = useState(false);
  const [clickappdev, setClickappdev] = useState(false);
  const [clickwebdev, setClickwebdev] = useState(false);
  const [clickalgos, setClickalgos] = useState(false);

  const handleClickTronix=()=>{
    setClickappdev(false);
    setClickwebdev(false);
    setClickalgos(false);
    setClicktronix(!clicktronix);
    setProfileName("Tronix");
  }
  const handleClickAppdev=()=>{
    setClicktronix(false);
    setClickwebdev(false);
    setClickalgos(false);
    setClickappdev(!clickappdev);
    setProfileName("App Dev");
  }
  const handleClickWebdev=()=>{
    setClicktronix(false);
    setClickappdev(false);
    setClickalgos(false);
    setClickwebdev(!clickwebdev)
    setProfileName("Web Dev");
  }
  const handleClickAlogs=()=>{
    setClicktronix(false);
    setClickwebdev(false);
    setClickappdev(false);
    setClickalgos(!clickalgos);
    setProfileName("Algos");
  }

  const handleYearClick =(e, yr)=>{
    setYearName(yr); 
  }

  console.log(yearName, ProfileName)

  const subMenuAnimate = {
    enter: (i)=> ({
        opacity: 1,
        rotateX: 0,
        transition: {
          duration: i*0.08
        },
        display: "block"
      }
    ),
    exit: {
      opacity: 0,
      rotateX: 1,
      display: "none"
    }
  };

  return(
    <Container className="container">
      <Router>
      <h1 style={{color:"white", textAlign:"center", padding:15, fontSize:55, fontWeight:600}}>Members</h1>
    <br/>
    <>
        <nav className='navbar'>
        <motion.div
            className="menu-item"
        >
          <Button onClick={handleClickTronix} className="tronixIcon"> 
            <MemoryIcon fontSize="large" />
            <br/>
            <p className="label">Tronix</p>
          </Button> 
          <div className="sub-menu"
              style={{marginTop:12}}
            >
            {clicktronix && 
                <div>
                {year.map((item, index)=>{
                  return(
                    <motion.div 
                    initial="exit"
                    animate={clicktronix ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    custom={index}
                    key={index}>
                      <div className="batchLinks" onClick={((e) => handleYearClick(e, item[0]))}>
                        {item[1]}
                      </div>
                  </motion.div>
               )
             })}
           </div>
            }
            </div>
          </motion.div>
          <motion.div
            className="menu-item"
          >
          <Button onClick={handleClickWebdev} className="webdevIcon"> 
            <PublicIcon fontSize="large"/>
            <br/>
            <p className="label">Web Dev</p>
          </Button> 
          <div className="sub-menu"
              style={{marginTop:12}}
            >
            {clickwebdev && 
                <div>
                {year.map((item, index)=>{
                  return(
                    <motion.div 
                    initial="exit"
                    animate={clickwebdev ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    custom={index}
                    key={index}>
                      <div className="batchLinks" onClick={((e) => handleYearClick(e, item[0]))}>
                        {item[1]}
                      </div>
                  </motion.div>
               )
             })}
           </div>
            }
            </div>
          </motion.div> 
          <motion.div
            className="menu-item"
          >
          <Button  onClick={handleClickAppdev} className="appdevIcon"> 
            <AndroidIcon fontSize="large" />
            <br/>
            <p className="label">App Dev</p>
          </Button> 
          <div className="sub-menu"
              style={{marginTop:12}}
            >
            {clickappdev && 
                <div>
                {year.map((item, index)=>{
                  return(
                    <motion.div 
                    initial="exit"
                    animate={clickappdev ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    custom={index}
                    key={index}>
                      <div className="batchLinks" onClick={((e) => handleYearClick(e, item[0]))}>
                        {item[1]}
                      </div>
                  </motion.div>
               )
             })}
           </div>
            }
            </div>
          </motion.div>
          <motion.div
            className="menu-item"
          >
          <Button onClick={handleClickAlogs} className="algosIcon"> 
            <AccountTreeIcon fontSize="large" />
            <br/>
            <p className="label">Algos</p>
          </Button> 
          <div className="sub-menu"
              style={{marginTop:12}}
            >
            {clickalgos && 
                <div>
                {year.map((item, index)=>{
                  return(
                    <motion.div 
                    initial="exit"
                    animate={clickalgos ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    custom={index}
                    key={index}>
                      <div className="batchLinks" onClick={((e) => handleYearClick(e, item[0]))}>
                        {item[1]}
                      </div>
                  </motion.div>
               )
             })}
           </div>
            }
            </div>
          </motion.div>
        </nav>
      </>  
    <AnimatePresence initial={true}>
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
    style={{display:"flex", justifyContent:"space-around", padding:30}}
    >  
    <CardColumns>
      <Container>
        {members
        .filter(member => member.Profile === ProfileName)
        .filter(member => member.Year === yearName)
        .map(member => (
        <motion.div className="item" variants={item} >
        <motion.div
         whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <Card className="bg-dark text-white" style={{margin:20}}> 
        <Card.Img src={member.Photo} alt={member.Name} />
          <Card.ImgOverlay>
            <Card.Title>{member.Name}</Card.Title>
          </Card.ImgOverlay>
        <Card.Body>
          <Card.Text className="iconLinks">
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
            </motion.div>
          </motion.div>
        ))}       
      </Container>  
    </CardColumns>
    </motion.ul> 
    </AnimatePresence>   
    </Router>
   </Container>    
)};

export default Members;