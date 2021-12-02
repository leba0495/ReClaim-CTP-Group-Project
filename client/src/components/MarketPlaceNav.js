import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/icon.png'

function MarketNav(props) {
    return (
      // Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
      <Navbar className = "navBar" fixed ="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container> 
    <Navbar.Brand href="/">
          <Image src = {Logo} width="30"
            height= "30" className="d-inline-block align-top"/>
        ReClaim
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className = "ms-auto" >
        <Nav.Link href="/market-place">MarketFeed</Nav.Link>
        <Nav.Link href="#our-goal">Liked Batches</Nav.Link>
        <Nav.Link href="/sign-up">Claimed Batches</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
  }

  export default  MarketNav;