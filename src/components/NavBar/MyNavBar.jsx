import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi Sitio Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Enlace</Nav.Link>
          <NavDropdown title="Desplegable" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Otra acción</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Enlace separado</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
