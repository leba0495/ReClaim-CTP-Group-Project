import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,  
} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import MarketPlacePage from './pages/MarketPlacePage'
import LoginSignUpPage from './pages/LoginSignUpPage'
import AddBatch from "./components/AddBatch";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/log-in" component={LoginSignUpPage}/>
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/market-place" component={MarketPlacePage} />
                <Route path="/add-batch" component={AddBatch} />
                <Route path="/" component={LandingPage} />
              </Switch>
            </div>
          </div>
      </Router>
    );
  }
}


export default App;
