import React from "react";
import BottomFooter from "./footer-bottom";
import MapComponent from "./footer-maps";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./footer-overall.css";

function Footer() {
  return (
    <div id="Footer-Contacts">
      <div className="footer-main">
        <center>
          <br />
          <h1 className="footer-header">Find Us</h1>
        </center>
      </div>
      <Grid className="footer-contact-info" container spacing={0}>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <br/>
          <br/>
          <br/>
          <Typography align="center" variant="h6" gutterBottom>
            <b>Primary Office</b>
            <br />
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Spider R&D Lab,
            <br /> Ground floor, Old SAC,
            <br /> (Opposite to CCD), NIT Tiruchirappalli.
            <br />
            <br />
          </Typography>
          
          {/* <Typography align="center" variant="h6" gutterBottom>
            <b>Points of Contact</b>
            <br />
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Mobile : 8210982383
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Sudharshan S
            <br /> Treasurer, Spider
            <br />
            Mobile : 9600897202
          </Typography> */}
        </Grid>
        <Grid item xs={12} sm={6} className="map-grid">
          <MapComponent />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Typography align="center" variant="h6" gutterBottom>
            <b>Points of Contact</b>
            <br />
          </Typography>
        </Grid>
        
      

         <Grid item md={3}>
          <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
        </Grid>
        <Grid item md={3}>
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
          </Grid>
        <Grid item md={3}>
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
          </Grid>
        <Grid item md={3}>
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>

        </Grid>
        {/* <Grid item md={3} >
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
        </Grid>
        <Grid item md={3}>
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
          </Grid>
        <Grid item md={3}>
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
          </Grid>
        <Grid item md={3}>
        <Typography align="center" variant="body1" gutterBottom>
            Kumar Gaurav Singh
            <br /> President, Spider
            <br />
            Ph: <span>6546468464</span>
          </Typography>
          </Grid> */}
      </Grid>
            <br/>
            <hr/>
      <BottomFooter />
    </div>
  );
}

export default Footer;
