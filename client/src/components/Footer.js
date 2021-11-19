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
          <Col>
          <Image src = {FooterImg2} width = "80px" height = "80px"/>
          </Col>
          <Col>
          2 of 3
            <Col>s</Col>
            <Col>s</Col>
            <Col>s</Col>
          </Col>
          <Col>
          3 of 3
            <Col>s</Col>
            <Col>s</Col>
            <Col>s</Col>
          </Col>
          <Col>
          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} 
          overlay ={renderTooltip}>      
              <Image src = {FooterImg} width = "100px" height = "100px"/>
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