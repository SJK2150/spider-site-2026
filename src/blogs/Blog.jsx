import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Data from "./blogInfo.json";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";
import Card from 'react-bootstrap/Card';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const useStyles = makeStyles(theme => ({
 heroContent:{
   margin:20,
 },
 root:{
  color:"whitesmoke",
  fontFamily:"tahoma",
  margin:35
 },
 desc:{
  color:"#585858",
  fontFamily:"sans-serif",
  fontSize:16,
  marginTop:15

 },
 heading:{
  paddingTop:20,
  paddingLeft:20,
  paddingRight:20,
  display:"flex",
  justifyContent:"space-around",
  fontSize:20,
  fontFamily:"tahoma",
  fontWeight:150
 },
 cardMedia:{
   borderRadius:8
 },
 card:{
  borderRadius:8
}
}));

let data = JSON.stringify(Data);
let blogData = JSON.parse(data);

function Album(props) {
  const classes = useStyles();
  console.log(props.cardOpen)
  return (
    <div>
      <Card className={classes.card}>
      <Card.Text >
        <p className={classes.heading}>
          {props.blogTitle}
        </p>
      </Card.Text>
      <Card.Body>
        <Card.Img 
          src={props.imgsrc} 
          alt="Card image"
          className={classes.cardMedia} 
        />
      {props.cardOpen && 
        <AnimatePresence>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:0.3}}
        >
        <p className={classes.desc} gutterbottom>
          {props.blogDescription}
        </p>
        <div href={props.blogLink}
          style={{color:"gray", fontSize:17, fontFamily:"calibri", fontSmooth: "auto", cursor:"pointer", display:"flex", justifyContent:"center"}}>
            <LocalLibraryIcon style={{marginRight:7}}/>Read blog
        </div>
        </motion.div>
      </AnimatePresence> 
    }
     
    {(props.cardOpen) ?
      <div onClick={props.isOpen} style={{float:"right", cursor:"pointer"}}>
        <ExpandLessIcon style={{fontSize:40, marginTop:10, color:"	#909090"}}/>
    </div> : (
      <div onClick={props.isOpen} style={{float:"right", cursor:"pointer"}}>
        <ExpandMoreIcon style={{fontSize:40, marginTop:10, color:"	#909090"}}/>
    </div>
    )}
    </Card.Body>
    </Card>
    </div>
  );
}

export default function ProjectItems() {
  const classes = useStyles();
  const [cardOpen, setCardOpen]= useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              className={classes.root}
              gutterBottom
            >
              Blogs
            </Typography>
          </Container>
        </div>
        <Container maxWidth="md">
        <Grid container spacing={6}>
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