import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {

  return (
    <Navbar expand="lg" style={navBarStyle} className="text-light shadow-lg">
      <Container>
        <Navbar.Brand href="#home">My Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <NavDropdown title="Menu" id="navbarDropdown" menuVariant="dark">
              <NavDropdown.Item href="#snacks">Snacks</NavDropdown.Item>
              <NavDropdown.Item href="#main-courses">
                Main Courses
              </NavDropdown.Item>
              <NavDropdown.Item href="#desserts">Desserts</NavDropdown.Item>
              <NavDropdown.Item href="#beverages">Beverages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
