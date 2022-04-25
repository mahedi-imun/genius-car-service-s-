import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-black.png'
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img className='w-50' src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#banner">Home</Nav.Link>
            <Nav.Link href="/#services">services</Nav.Link>
            <Nav.Link href="/#experts">Experts</Nav.Link>
            <Nav.Link href="/addservice">Add service</Nav.Link>
            <Nav.Link href="/manage">manage</Nav.Link>
          </Nav>
          <Nav>

            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/order'>Order</Nav.Link>
            {
              user ?
                <>
                  
                  <button onClick={() => signOut(auth)} className='btn btn-info '>Log Out</button></>


                :
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;