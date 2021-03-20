import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Data from "./blogInfo.json";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import BlogNav from './BlogNav';

const myStyles = makeStyles(theme => ({
 heroContent:{
   margin:20,
 },
 root:{
  color:"whitesmoke",
  fontFamily:"tahoma",
  margin:35
 },
 desc:{
  color:"blue",
  fontFamily:"tahoma",
  padding:30,
  lineHeight:30
 }

}));

let data = JSON.stringify(Data);
let blogData = JSON.parse(data);

const useStyles = makeStyles();

function Album(props) {
  const classes = useStyles();

  return (
    <div>
      <Card >
      <Card.Header >
        <h5 style={{color:"black", fontFamily:"tahoma", fontSmooth: "auto"}}>{props.blogTitle}</h5>
      </Card.Header>
      <Card.Body>
      <Card.Img 
      src={props.imgsrc} 
      alt="Card image"
      className={classes.cardMedia} />
    
        <p style={{color:"gray", margin:10,fontSize:14, fontFamily:"tahoma", fontSmooth: "auto"}}
              className={classes.desc}
              gutterBottom
            >
              {props.blogDescription}
            </p>

      <Button href={props.blogLink}
        style={{color:"gray", fontSize:14, fontFamily:"calibri", fontSmooth: "auto"}}>View More</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default function ProjectItems() {
  const classes = myStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <BlogNav/>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
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
       
        <Grid container spacing={4}>

          {blogData.map(post => (
              <Grid item xs={12} sm={6} md={4}  key={post.id}>
                <motion.div
                  className="container"
                  initial={{ scale: 0, }}
                  animate={{  rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 35
          }}
        >
          <Album
                  blogId={post.id}
                  blogTitle={post.title}
                  blogDescription={post.summary}
                  imgsrc={post.image_link}
                  blogLink={post.article_link}
                />
        </motion.div>
              </Grid>
              
            ))}
            
          </Grid>
              
        </Container>
      </main>
    </React.Fragment>
  );
}
