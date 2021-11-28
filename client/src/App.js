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
import {Navbar, Container, Nav, NavDropdown, Button, Image} from 'react-bootstrap';

import Logo from './images/icon.png'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNav from './components/HomeNav'


class App extends React.Component {
  render() {
    return (
        <Router>
          <HomeNav/>
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
          </div>
      </Router>
    );
  }
}


export default App;
