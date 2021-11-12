import React from 'react';
import {Container, Row, Col, Image, Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landingpage.css'
import HeaderImage from '../images/headerimg.jpg'
import HowItWorkImg from '../images/howitwork.png'

class LandingPage extends React.Component {

  render() {

    return (
      //Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
      //fluid = "md" indicate the container is fluid and indicate the breakpoint is at medium screen
      <Container className = "header" fluid = "md">
        <Row className = "intro">
          {/* lg={true} indicates the breakpoint of the column, in this case break at screen large. */}
          <Col className = "introText" lg={true}>ReClaim makes recycling easy. 
          So easy that you forget about it. With a platform so easy to use, you might not even realize you’re helping to save the world. <p> <Button  className = "joinUsButton" href="/sign-up" variant="success">Join us Today !</Button> </p></Col>
          <Col>
            <Image className = "headerimg" src= {HeaderImage} style={{ maxWidth: '25rem'}}/>
          </Col>
      </Row>
      <Row className = "howItWorks">
        <Col><strong>How it Works</strong>
        <Image className = "howIcon" src = {HowItWorkImg}
        width = "40px" height = "40px"/>
        </Col>
      </Row>
      {/*<Row xs={1} md={1}  lg = {1}>  you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, xl and xxl).
       For every breakpoint, you can specify the amount of columns that will fit next to each other.  */}
      <Row className="align-items-center howItExplain">
          <Col>
          <Badge className = "badges"pill bg="info">
          <strong>Posting</strong>
          </Badge>
            <p>details</p>
            <p>details</p>
            <p>details</p>
          </Col>
          <Col>
          <Badge className = "badges" pill bg="warning">
          <strong>Collecting</strong>
          </Badge>
          <p>details</p>
          <p>details</p>
          <p>details</p>
          </Col>
      </Row>
      </Container>
      
    );
  }
}

export default LandingPage;