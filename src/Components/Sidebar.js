import React from "react";
import '../Stylesheets/Sidebar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
const Sidebar = ()=> {
  const expand = false;

  return (
      <>
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"> 
              <img src="https://www.lejhro.com/lejhro_logo_white.png" alt="Lejhro Logo" class="logo"/> 
            </Navbar.Brand>
            <div className="header-2">
              <NavbarBrand bsPrefix="a">Innovations</NavbarBrand>
              <NavbarBrand bsPrefix="a">Services</NavbarBrand>
              <NavbarBrand bsPrefix="a">Bootcamp</NavbarBrand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} bsPrefix="toggle-btn">
                  <div className="hamburger"></div>
              </Navbar.Toggle>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="close-btn-element">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="https://www.lejhro.com/lejhro_logo_blue.png" alt="Lejhro Logo" class="logo logo-blue"/> 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="nav-elements">Innovations</Nav.Link>
                  <Nav.Link href="/" className="nav-elements">Bootcamp</Nav.Link>
                  <Nav.Link href="/" className="nav-elements">Services</Nav.Link>
                  <Nav.Link href="/" className="nav-elements">About us</Nav.Link>
                  <Nav.Link href="/" className="nav-elements">Contact us</Nav.Link>
                  <Nav.Link href="/" className="nav-elements">Blogs</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
  );
}

export default Sidebar;