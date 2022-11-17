import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import GitHubIcon from "@material-ui/icons/GitHub";
import './navbar.css';

function NavBar() {
  return (
    <Navbar className="custom-nav" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="logo-alt.png"
          alt="Spider Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects"><strong>Projects</strong></Nav.Link>
          {/* <Nav.Link href="#events">Events</Nav.Link> */}
          <Nav.Link href="/achievements"><strong>Achievements</strong></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/blogs"><strong>Blog</strong></Nav.Link>
          <Nav.Link href="/members"><strong>Members</strong></Nav.Link>
          <Nav.Link target='_blank' href="https://github.com/SpiderNitt"><GitHubIcon></GitHubIcon></Nav.Link>
          {/* <Nav.Link href="#admin">Admin</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
