import React from 'react';
import {Container, Row, Col, Image, Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landingpage.css'
import HeaderImage from '../images/headerimg.jpg'
import HowItWorkImg from '../images/howitwork.png'
import PackGoodImg from '../images/recycle-bag.png'
import EnterDetailImg from '../images/paper.png'
import PostBatchImg from '../images/care.png'
import CheckImg from '../images/eye.png'
import ClaimBatchImg from '../images/click.png'
import PickUpImg from '../images/gps.png'
import FactImg from '../images/fact.png'
import DownArrowImg from '../images/down-arrow.png'
import TrashImg from '../images/trash.png'
import TvImg from '../images/watch-tv.png'
import EarthImg from '../images/earth.png'
import PlanetImg from '../images/planet.png'
import EcoLight from '../images/eco-light.png'
import Programmer1 from '../images/programmer.png'
import Programmer2 from '../images/teacher.png'
import Programmer3 from '../images/businessman.png'



class LandingPage extends React.Component {

  render() {

    return (
      //Extra small (xs) · Small (sm) · Medium (md) · Large (lg) · Extra large (xl) · Extra extra large (xxl)
      //fluid = "md" indicate the container is fluid and indicate the breakpoint is at medium screen
      <Container className = "header" fluid = "md">
      {/* Intro section */}
        <Row className = "intro">
          {/* lg={true} indicates the breakpoint of the column, in this case break at screen large. */}
          <Col className = "introText" lg={true}>
            ReClaim makes recycling easy. 
            So easy that you forget about it. 
            With a platform so easy to use, 
            you might not even realize you’re helping to save the world. 
            <p>
            <Button  className = "joinUsButton" href="/sign-up" variant="success">Join us Today!</Button> 
            </p>
          </Col>
          <Col>
            <Image className = "headerimg" src= {HeaderImage} style={{ maxWidth: '25rem'}}/>
          </Col>
      </Row>
      <Image className = "introArrow" src = {DownArrowImg}
        width = "40px" height = "30px"/>

    {/* How it works section */}
      <Row className = "howItWorks">
        <Col><strong>How it Works</strong>
        <Image className = "sectionIcons" src = {HowItWorkImg}
        width = "40px" height = "px"/>
        </Col>
      </Row>
      {/*<Row xs={1} md={1}  lg = {1}>  you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, xl and xxl).
       For every breakpoint, you can specify the amount of columns that will fit next to each other. 
       //align-items-center */}
      <Row className="howItExplain justify-content-md-center">    
          <Col>
            <Badge className = "badges"pill bg="info">
            <strong>Posting</strong>
            </Badge>

            <h5><Image className = "howItWorkImgs" src = {PackGoodImg}width = "50px"  height = "50px"/>
            <b>Pack Goods</b></h5> 
            <Col>
            <p className ="howTexts">
              <i><strong>Step 1. </strong></i>
              Put your goods in a plastic bag, or any sort of container.
              </p>
            </Col>

            <h5><Image className = "howItWorkImgs" src = {EnterDetailImg}width = "50px"  height = "50px"/>
            <b>Enter Details</b></h5> 
            <Col>
              <p className ="howTexts">
              <i><strong>Step 2. </strong></i> 
              Enter information about your batch of recyclable goods.
              </p>
            </Col>

            <h5><Image className = "howItWorkImgs" src = {PostBatchImg}width = "50px"  height = "50px"/>
            <b>Post Batch</b></h5> 
            <Col>
              <p className ="howTexts">
              <i><strong>Step 3. </strong></i>
               Post the batch of recycable goods on the marketplace.
              </p>
            </Col>
          </Col>

          <Col>
            <Badge className = "badges" pill bg="warning">
            <strong>Collecting</strong>
            </Badge>

            <h5><Image className = "howItWorkImgs" src = {CheckImg}width = "50px"  height = "50px"/>
            <b>Availability</b></h5> 
            <Col>
              <p className ="howTexts">
              <i><strong>Step 1. </strong></i>
              Scroll through a list of batches that are available in your area.
              </p>
            </Col>

            <h5><Image className = "howItWorkImgs" src = {ClaimBatchImg}width = "50px"  height = "50px"/>
            <b>Claim Batch</b></h5> 
            <Col>
              <p className ="howTexts">
             <i><strong>Step 2. </strong></i>
             Select the batch you’re interested in and click “claim”.
             </p>
            </Col>

            <h5><Image className = "howItWorkImgs" src = {PickUpImg}width = "50px"  height = "50px"/>
            <b>Pick Up</b></h5> 
            <Col>
              <p className ="howTexts">
              <i><strong>Step 3. </strong></i>
              Confirm location and collect your goods!
              </p>
            </Col>
          </Col>
      </Row>

 {/* Top Recycle Facts section */}
    <Row className = "recycleFacts">
      <Col>
      <strong>Top Recycling Facts</strong>
      <Image className = "sectionIcons " src = {FactImg}
        width = "40px" height = "35px"/> 
      </Col>

        <Row>
          <Col xs = {3}lg = {3}><Image className = "factImgL" src = {TrashImg}
        width = "95px" height = "95px"/> </Col>
          <Col xs ={8} className = "factTextsR">
            The world generates at least 3.5 million tons of plastic and other solid waste a day,
             10 times the amount a century ago, 
            according to World Bank researchers. 
          </Col>
        </Row>

        <Row>
          <Col xs ={8} className = "factTextsL">
          It’s estimated that recycling a single aluminum can will save enough energy to power a TV for up to three hours.
            </Col>
            <Col xs = {2}lg = {2}><Image className = "factImgR" src = {TvImg}
            width = "95px" height = "95px"/> </Col>
        </Row>

         <Row>
            <Col xs = {3}lg = {3}><Image className = "factImgL" src = {EarthImg}
          width = "95px" height = "95px"/> </Col>
            <Col xs ={8} className = "factTextsR">
            The Environmental Protection Agency (EPA) estimates that about 75% of the waste stream generated by people in the U.S. is recyclable. Unfortunately, only about 30% of the waste stream is actually recycled.
            </Col>
          </Row>

        <Row>
          <Col xs ={8} className = "factTextsL">
          When U.S. recycling levels reach 75% it will be the environmental
           and CO2 equivalent of removing 55 million cars from U.S. roads each year.
            </Col>
          <Col xs = {2}lg = {2}><Image className = "factImgR" src = {PlanetImg}
          width = "95px" height = "95px"/> </Col>
        </Row>
    </Row>

  {/* Our Goal Section */}

    <Row className = "goalSection">
    <Col><strong>Our Goal</strong>
        <Image className = "sectionIcons" src = {EcoLight}
        width = "40px" height = "px"/>
        </Col>
    </Row>
    <Row className = "goalSection justify-content-md-center">
      <Col className = "aimText"  lg = {10}>
      Our goal is to connect everyday people who are passionate about recycling but may be strapped for time with those who have the time and want to recycle more!
       We even want people who aren’t that passionate about recycling to give us a try.
       </Col>
    </Row>
    <Row className = "roundedTexts justify-content-md-center">
      <Col xs = {4} md = {3} lg = {2}>
       <p> 3,000+ ACTIVE USERS </p>
      </Col>
      <Col xs = {4} md = {3} lg = {2}>
      <p>30,000+ TONS RECYCLED </p> 
      </Col>
      <Col xs = {4} md = {3} lg = {2}>
      <p> 1 DEDICATED TEAM</p> 
      </Col>
    </Row> 
     <Row className = "goalSection justify-content-md-center">
       <Col className = "aimText" lg = {10}>
       We understand sometimes people feel like they put in a lot of effort but do not see the reward. 
       We want to change that by providing both those who recycle their eligible waste and those who take it with more incentives to do so.
       </Col>
     </Row>

      {/* About us */}
  <div className = "aboutUsSection"> 
    <Row>
      <Col>
      <strong>About Us</strong>
      </Col>
    </Row>
    <Row className = "aboutUsImg justify-content-md-center">
      <Col xs = {4} lg = {3}>
      <Image src = {Programmer1}
          width = "95px" height = "95px"/>
      </Col>
      <Col xs = {4} lg = {3}>
      <Image src = {Programmer2}
          width = "95px" height = "95px"/>
      </Col>
      <Col xs = {4}  lg = {3}>
      <Image src = {Programmer3}
          width = "95px" height = "95px"/>
      </Col>
    </Row> 
     <Row className = "aboutUs justify-content-md-center" >
       <Col lg = {7} className = "aboutUsText">
       In 2021, our founders, Daniel Li, Kessler Lock, and Luis Brito believed there had to be a better way to improve the outdated,
        expensive and inefficient process of commercial recycling and waste management - And from this belief, ReClaim was born.
       </Col>
     </Row>
    </div>

</Container>
    );
  }
}

export default LandingPage;