import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo-black.png'
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand className='md-w-50' href="#home">
            <img className='w-50' src={logo} alt="" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> <NavLink to='/'>home</NavLink> </Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;