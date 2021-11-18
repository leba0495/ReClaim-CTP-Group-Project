import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'

function Footer(props) {
  return (
  <footer  className="footer">
   <div>
        <div className="footer-top space-between text-xxs">
         
        </div>
        <div className="footer-bottom space-between text-xxs invert-order-desktop">
          <div className="footer">FOOTER COMPONENT</div>
        </div>
      </div>
  </footer>
  );
}

export default Footer;