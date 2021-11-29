import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Button, Image} from 'react-bootstrap';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/icon.png'

function HomeNav(props) {
    return (
      // Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
      <Navbar className = "navBar" fixed ="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container> 
    <Navbar.Brand href="#home">
          <Image src = {Logo} width="30"
            height= "30" className="d-inline-block align-top"/>
        ReClaim
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className = "ms-auto" >
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#our-goal">Our Goal</Nav.Link>
        <Nav.Link href="#about-us">About Us</Nav.Link>
        <Nav.Link className = "me-4" href="#environmentFacts">Environment Facts</Nav.Link>
        <Nav.Link href="/sign-up">Sign Up</Nav.Link>
        <Button className = "logInButton" href="/log-in" variant="success">Log in</Button>{' '}
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
  }

  export default HomeNav;