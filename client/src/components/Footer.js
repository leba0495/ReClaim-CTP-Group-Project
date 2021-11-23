import React from 'react';
import {Container, Row, Col, Image, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'
import FooterImg from '../images/icon.png';
import FooterImg2 from '../images/recycling.png';

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
          <Image className ="footer2img element-to-hide" src = {FooterImg2} width = "80px" height = "80px"/>
            <p className="footer2Text"> Look deep into nature, and then you will understand everything better.    
             - Albert Einstein </p> 
          </Col>
          <Col xs = {4}  className = "links">
            <Col><a   href="/">CONTACT</a></Col>
            <Col><a  href="/">OUR STORY</a></Col>
            <Col><a   href="/">FIND US</a></Col>
            <Col><a   href="/">FAQ</a></Col>
          </Col>
          <Col xs = {3} className = "links">
            <Col ><a  href="/sign-up">SIGN UP</a></Col>
            <Col><a  href="/">INFO</a></Col>
            <Col><a  href="/">FACEBOOK</a></Col>
            <Col><a   href="/">INSTAGRAM</a></Col>
          </Col>
          <Col>
          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} 
          overlay ={renderTooltip}>      
              <Image src = {FooterImg} width = "80px" height = "80px"/>
          </OverlayTrigger>
          </Col>
      </Row>
     {/* <Row>
          <Col>
          1 of 3
          </Col>
          <Col>
          2 of 3
          </Col>
          <Col>
          3 of 3
          </Col>
     </Row>
     <Row>
          <Col>
          1 of 3
          </Col>
          <Col>
          2 of 3
          </Col>
          <Col>
          3 of 3
          </Col>
     </Row> */}
        
  {/* <footer >
   <div>
        <div className="footer-top space-between text-xxs">
         
        </div>
        <div className="footer-bottom space-between text-xxs invert-order-desktop">
          <div className="footer">FOOTER COMPONENT</div>
        </div>
      </div>
  </footer> */}
  </Container>
  );
}

export default Footer;