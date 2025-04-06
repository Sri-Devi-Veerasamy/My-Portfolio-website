

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = ({
  scrollToFooter,
  scrollTowork,
  scrollToClients

}) => {

  
  return (
    <Navbar expand="lg" className="font-weight-bold navbar-custom sticky-top" style={{ paddingLeft: '20px', paddingRight: '20px',background:'linear-gradient(to right, #BCF6D0, #BFDCFA)' }}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center brandName">Sri Devi</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={scrollTowork} href="#work" className="nav-link-hover fw-medium me-4">Work</Nav.Link>
            <Nav.Link href="#services" className="nav-link-hover fw-medium me-4">Services</Nav.Link>
            <Nav.Link onClick={scrollToClients}  href="#clients" className="nav-link-hover fw-medium me-4">Clients</Nav.Link>
            <Nav.Link onClick={scrollToFooter} href="#about" className="nav-link-hover fw-medium me-4">About</Nav.Link>
            {/* <Button onClick={scrollToFooter} className="btn-small d-flex align-items-center fw-bold">
              Contact <FaArrowRight className="arrow-icon fw-bold" />
            </Button> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
// href={`https://www.instagram.com/${''}`}
//  href={`https://www.facebook.com/${''}`}
