import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Data from "./blogInfo.json";
import { motion, AnimatePresence} from "framer-motion";
import Card from 'react-bootstrap/Card';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import './blog.css';
import {Link} from 'react-bootstrap'

let data = JSON.stringify(Data);
let blogData = JSON.parse(data);

function Album(props) {
  const container = {
    hidden: { rotate: 180, opacity:0 },
    show: {
      rotate: 0,
      opacity:1,
    }
  };
  // console.log(props.cardOpen)
  return (
    <div>
      <motion.div 
      className="cardblock"
      variants={container}
      initial="hidden"
      animate="show"
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.25 },
      }}
      >
      <Card.Text >
      <motion.div >
        <p className="heading" style={{fontSize:20, paddingTop:20}}>
          {props.blogTitle}
        </p>
        </motion.div>
      </Card.Text>
      <Card.Body style={{paddingBottom:45}}>
        <motion.div>
        <Card.Img 
          src={props.imgsrc} 
          alt="Card image"
          className="cardMedia" 
        />
        </motion.div>
      {props.cardOpen && 
        <AnimatePresence>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:2}}
        >
        <p className="desc" gutterbottom>
          {props.blogDescription}
        </p>
         <a href={props.blogLink}
          style={{color:"gray", textDecoration:"none", fontSize:17, fontFamily:"calibri", fontSmooth: "auto", cursor:"pointer", display:"flex", justifyContent:"center"}}>
            <LocalLibraryIcon style={{marginRight:7}}/>Read blog
        </a>
        </motion.div>
      </AnimatePresence> 
    }
     {(props.cardOpen) ?
      <div onClick={props.isOpen} style={{float:"right", cursor:"pointer"}}>
        <ExpandLessIcon style={{fontSize:40, color:"#909090"}}/>
    </div> : (
      <div onClick={props.isOpen} style={{float:"right", cursor:"pointer"}}>
        <ExpandMoreIcon style={{fontSize:40, color:"	#909090"}}/>
    </div>
    )}
    </Card.Body>
    </motion.div>
    </div>
  );
}

export default function ProjectItems() {
  const [cardOpen, setCardOpen]= useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="heroContent">
          <Container maxWidth="lg">
            <Typography 
              variant="h2"
              align="center"
              color="whitesmoke"
              style={{marginBottom:20, fontSize:70, fontFamily:"calibri"}}
              className="root"
              gutterBottom
            >
              Blogs
            </Typography>
          </Container>
        </div>
        <Container maxWidth="md">
        <Grid container spacing={4}>
        {blogData.map(post => (
              <Grid item xs={12} sm={6} md={4}  key={post.id}>
                <div>
              <Album
                  blogId={post.id}
                  blogTitle={post.title}
                  blogDescription={post.summary}
                  imgsrc={post.image_link}
                  blogLink={post.article_link}
                  isOpen={()=>{setCardOpen(id => {if(post.id==id) return null; return post.id;})}}
                  cardOpen={cardOpen===post.id}
                />
          </div>
          </Grid>
          ))}    
          </Grid>      
        </Container>
      </main>
    </React.Fragment>
  );
}