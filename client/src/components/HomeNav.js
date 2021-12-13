import React from 'react';
import {Navbar, Container, Nav, Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeNav(props) {
    return (
      // Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
      <Navbar className = "navBar" fixed ="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container> 
    <Navbar.Brand href="/">
          <Image src = "images/icon.png" width="30"
            height= "30" className="d-inline-block align-top"/>
        ReClaim
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className = "ms-auto" >
        <Nav.Link href="#how-it-work">How it Works</Nav.Link>
        <Nav.Link href="#environmentFacts">Facts</Nav.Link>
        <Nav.Link href="#our-goal">Our Goal</Nav.Link>
        <Nav.Link href="#about-us">About Us</Nav.Link>
        {/* <Nav.Link href="/sign-up">Sign Up</Nav.Link> */}
        <Button className = "logInButton" href="/log-in" variant="success">Login</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
  }

  export default HomeNav;