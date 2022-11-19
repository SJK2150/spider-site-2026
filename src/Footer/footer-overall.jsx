import React from 'react';
import BottomFooter from './footer-bottom';
import MapComponent from './footer-maps';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './footer-overall.css';

function Footer() {
  return (
    <div id="Footer-Contacts">
      <div className="footer-main">
        <center>
          <br />
          <h3 className="footer-header">
            <strong>Find Us</strong>
          </h3>
        </center>
      </div>
      <div className="footer-contact-info">
        <div className="footer-contact-text">
          <h6>Primary Office</h6>
          <p>Spider R&D Lab, </p>
          <p>Ground floor, Old SAC,</p>
          <p>(Opposite to CCD), NIT Tiruchirappalli.</p>

          <h6>Email</h6>
          <p><span>xyz@gmail.com</span> </p>
        </div>
        <div className="map-component">
          <MapComponent />
        </div>
        {/* <Grid item xs={12} sm={6}> */}
        {/* <br />
          <br />
          <br />
          <br />
          <br />
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
          </Typography> */}

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
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6} className="map-grid">
          <MapComponent />
        </Grid> */}
      </div>
      <br />
      <br />
      <br />
      {/* <Grid container spacing={4}> */}
      {/* <Grid item xs={12}>
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
        </Grid> */}
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
      {/* </Grid> */}
      {/* <h4 className="footer-header">
        <strong>Points of Contact</strong>
      </h4>
      <div className="footer-points-of-contact">
        <div>
          <strong> Kumar Gaurav Singh </strong>
          <br /> President, Spider
          <br />
          Ph: <span>6546468464</span>
        </div>
        <div>
          <strong> Kumar Gaurav Singh </strong>
          <br /> President, Spider
          <br />
          Ph: <span>6546468464</span>
        </div>
        <div>
          <strong>Kumar Gaurav Singh</strong>
          <br /> President, Spider
          <br />
          Ph: <span>6546468464</span>
        </div>
        <div>
          <strong> Kumar Gaurav Singh </strong>
          <br /> President, Spider
          <br />
          Ph: <span>6546468464</span>
        </div>
      </div> */}
      <br />
      <hr />
      <BottomFooter />
    </div>
  );
}

export default Footer;
