import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/about-us">About Us</Nav.Link>
      <Nav.Link className = "me-4" href="/environmentfacts">Environment Facts</Nav.Link>
      <Button  href="/log-in" variant="success">Log in</Button>
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
                <Route path="/home" component={LandingPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
