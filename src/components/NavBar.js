import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../images/Logo.png";
import "./NavBar.css";

const NavBar = () => {

  return (
    <Navbar id="navbar" expand="lg" className="text-light shadow-lg">
      <Container>
        <Navbar.Brand href="#home" id="brandname" className="text-success" >  <img src={logo} height={25} width={25} alt="logo"/>My Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link id="home" href="#home" className="active text-success">
              Home
            </Nav.Link>
            <NavDropdown className="text-light" title="Menu" id="navbarDropdown" menuVariant="dark">
              <NavDropdown.Item href="#snacks" >Snacks</NavDropdown.Item>
              <NavDropdown.Item href="#main-courses">
                Main Courses
              </NavDropdown.Item>
              <NavDropdown.Item href="#desserts">Desserts</NavDropdown.Item>
              <NavDropdown.Item href="#beverages">Beverages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="aboutus" href="#about-us" className="text-light">About Us</Nav.Link>
            <Nav.Link id="contacts" href="#contacts" className="text-light">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
