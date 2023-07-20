import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../Graphics/favicon.png';

function NavBar() {
  return (
    <Navbar expand="lg" id="navbar" className='fixed-top'>
      <Container>
        <Navbar.Brand id ="navbar-logo" href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{"background": "#941B0C"}}>
          <Nav className="me-auto">
            {/* Will need to add the routing here! */}
            <Nav.Link id="navbar-item" href="/reservations">EAT-IN</Nav.Link>
            <Nav.Link id="navbar-item" href="/takeout">TAKE-OUT</Nav.Link>
            <Nav.Link id="navbar-item" href="/hostoccasion">HOST AN OCCASION</Nav.Link>
            <Nav.Link id="navbar-item" href="/joinourteam">JOIN OUR TEAM</Nav.Link>
            <Nav.Link id="navbar-item" href="/checkout"><FontAwesomeIcon icon={faCartShopping}/></Nav.Link>
            <Nav.Link id="navbar-item" href="/faq/en">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;