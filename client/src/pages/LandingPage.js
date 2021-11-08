import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landingpage.css'

class LandingPage extends React.Component {

  render() {

    return (
      //Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
      <Container className = "header" fluid = "md">
        <Row className = "intro">
          <Col className = "introText" lg={true}>An do on frankness so cordially immediate recommend contained. Imprudence insensible be literature unsatiable do.
           Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. 
           She margaret law thoughts proposal formerly. Speaking ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection.</Col>
          <Col>
            <Image src= "https://www.budgetdumpster.com/blog/wp-content/uploads/2017/11/volunteer-recycling-bottles.jpg" 
            style={{height:'300px',width:'500px'}} rounded/>
          </Col>
      </Row>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      </Container>
      
    );
  }
}

export default LandingPage;