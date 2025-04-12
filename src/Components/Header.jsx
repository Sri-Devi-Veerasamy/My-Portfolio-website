import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = ({
  
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToEducation,
  scrollToInternship

}) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to update the state when scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) { // Change color after scrolling 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar expand="lg" className="bg-white font-weight-bold navbar-custom sticky-top" style={{
      paddingLeft: '20px', paddingRight: '20px',
      background: scrolled ? '#fff' : 'linear-gradient(to right, #BBF7D1, #BFDCFE)',borderBottom: scrolled ? '0.5px solid #ddd' : 0,
      boxShadow: scrolled ? 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' :''
    }}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center brandName">Sri Devi </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={scrollToHome} href="#home" className="nav-link-hover fw-medium me-4">Home</Nav.Link>
            <Nav.Link  onClick={scrollToAbout} href="#about" className="nav-link-hover fw-medium me-4">About</Nav.Link>
            <Nav.Link onClick={scrollToSkills}  href="#skills" className="nav-link-hover fw-medium me-4">Skills</Nav.Link>
            <Nav.Link onClick={scrollToEducation} href="#Education" className="nav-link-hover fw-medium me-4">Education</Nav.Link>
            <Nav.Link onClick={scrollToInternship} href="#Internship" className="nav-link-hover fw-medium me-4">Internship</Nav.Link>
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
