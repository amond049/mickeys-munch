import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBarBengali() {
  return (
    <Navbar expand="lg" id="navbar" className='fixed-top'>
      <Container>
        <Navbar.Brand id ="navbar-logo" href="/">বাড়ি</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{"background": "#941B0C"}}>
          <Nav className="me-auto">
            {/* Will need to add the routing here! */}
            <Nav.Link id="navbar-item" href="/reservations">একটি টেবিল বুক করুন</Nav.Link>
            <Nav.Link id="navbar-item" href="/takeout">টেকআউট</Nav.Link>
            <Nav.Link id="navbar-item" href="/hostoccasion">একটি অনুষ্ঠান হোস্ট করুন</Nav.Link>
            <Nav.Link id="navbar-item" href="/joinourteam">আমাদের দলে যোগ দিন</Nav.Link>
            <Nav.Link id="navbar-item" href="/checkout"><FontAwesomeIcon icon={faCartShopping}/></Nav.Link>
            <Nav.Link id="navbar-item" href="/faq/bn">সচরাচর জিজ্ঞাস্য</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBengali;