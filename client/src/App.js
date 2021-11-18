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
import LogInFormPage from './pages/LogInFormPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer'
import {Navbar, Container, Nav, NavDropdown, Button, Image} from 'react-bootstrap';

import Logo from './images/icon.png'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation(props) {
  return (
    // Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
    <Navbar fixed ="top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
      <Nav.Link href="/about-us">About Us</Nav.Link>
      <Nav.Link className = "me-4" href="/environmentfacts">Environment Facts</Nav.Link>
      <Nav.Link href="/sign-up">Sign Up</Nav.Link>
      <Button className = "logInButton" href="/log-in" variant="success">Log in</Button>{' '}
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
                <Route path="/log-in" component={LogInFormPage}/>
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/" component={LandingPage} />
              </Switch>
            </div>
            <Footer/>
          </div>
      </Router>
    );
  }
}


export default App;
