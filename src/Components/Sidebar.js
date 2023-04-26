import React from "react";
import '../Stylesheets/Sidebar.css'
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
const Sidebar = ()=> {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a href="/" >
            <img src="https://www.lejhro.com/lejhro_logo_white.png" alt="Lejhro Logo" class="logo"/>
          </a>
        </div>
        <div class="header-links">
          <a href="/" aria-disabled>Innovations</a>
          <a href="/" aria-disabled>Services</a>
          <a href='/' aria-disabled>Bootcamp</a>
          <button className="sidebar-btn"></button>
        </div>      
      </div>
      {/* {[true].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
          <Navbar.Brand >LEJHRO</Navbar.Brand>
          <Navbar.Brand href="#">Innovations</Navbar.Brand>
          <Navbar.Brand href="#">Services</Navbar.Brand>
          <Navbar.Brand href="#">Bootcamp</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  LEJHRO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Innovations</Nav.Link>
                  <Nav.Link href="/">Bootcamp</Nav.Link>
                  <Nav.Link href="/">Services</Nav.Link>
                  <Nav.Link href="/">About us</Nav.Link>
                  <Nav.Link href="/">Contact us</Nav.Link>
                  <Nav.Link href="/">Blogs</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
      ))} */}
    </>
  );
}

export default Sidebar;