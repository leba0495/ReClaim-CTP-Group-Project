import React from 'react';
import {Container, Row, Col, Image, Tooltip, OverlayTrigger} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'

function Footer(props) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Let’s ReClaim the Earth from pollution and ReClaim our time and effort!
    </Tooltip>
  );

  return (
    <Container className="footer">
      <Row>
          <Col xs = {1}>
          <Image className ="footer2img element-to-hide" src = "images/recycling.png" width = "80px" height = "80px"/>
            <p className="footer2Text"> Look deep into nature, and then you will understand everything better.    
             - Albert Einstein </p> 
          </Col>
          <Col className = "links text-md-right">
          <ul>
              <li className="list-unstyled">
                <a href="#!">CONTACT</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">OUR STORY</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">VOLUNTEER</a>
              </li>
            </ul>
          </Col>
          <Col className = "links text-md-left">
          <ul>
              <li className="list-unstyled">
                <a href="/sign-up">SIGN UP</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FIND US</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FACEBOOK</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">INSTAGRAM</a>
              </li>
            </ul>
          </Col>
          <Col xs ={3}md ={2}lg = {2}>
          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} 
          overlay ={renderTooltip}>      
              <Image src = "images/icon.png" width = "80px" height = "80px"/>
          </OverlayTrigger>
          </Col>
      </Row>
  </Container>
  );
}

export default Footer;