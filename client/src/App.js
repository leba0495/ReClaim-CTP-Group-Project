import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
/* Pages Imports */
import LandingPage from './pages/LandingPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import LogInFormPage from './pages/LogInFormPage';
import SignUpPage from './pages/SignUpPage';
import MarketPlace from './pages/MarketPlacePage';

/* Components Imports */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css';
// import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';

function Navigation(props) {
  return (
    // Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Container> 
  <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/1598/1598196.png"
          width="30"
          height= "30"
          className="d-inline-block align-top"
        />{' '}
      ReClaim
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className = "ms-auto" >
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/home">Home</NavDropdown.Item>
        <NavDropdown.Item href="/market-place">Market Place</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/about-us">About Us</Nav.Link>
      <Nav.Link className = "me-4" href="/environmentfacts">Environment Facts</Nav.Link>
      <Nav.Link href="/sign-up">Sign Up</Nav.Link>
      <Button  href="/log-in" variant="success">Log in</Button>{' '}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation/>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/environment-facts" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/log-in" component={LogInFormPage}/>
                <Route path="/sign-up" component={SignUpPage} />
                <Route parth="/market-place" component={MarketPlace}/>
                <Route path="/home" component={LandingPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
