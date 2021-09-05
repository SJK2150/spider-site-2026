import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="/achievements">Achievements</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/blogs">Blog</Nav.Link>
          <Nav.Link href="/members">Members</Nav.Link>
          <Nav.Link href="#admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
