import React from 'react';
import {Container, Row, Col, Image, Button, Card, Tabs,Tab, Form} from 'react-bootstrap';
import Footer from '../components/Footer'
import HomeNav from '../components/HomeNav'
import '../styles/LoginSignUp.css'

function LoginSignUpPage(props) {
  return (
    <Container fluid = "md">
        <HomeNav/>
        <Row className = "justify-content-center">
            <Col className ="loginAndSignUp" xl = {4} lg = {4} md = {5} xs = {8}>
            {/* login tab*/}
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
                
                <Tab eventKey="login" title="Login">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" href = "/market-place">
                        Submit
                    </Button>

                   </Form>
                </Tab>
                {/* sign up tab*/}
                <Tab eventKey="sign-up" title="Sign up">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="ex. Queens" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder="ex. NY" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="ex. 11365" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Sign me up as volunteer too!" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
               </Tab>
            </Tabs>
          </Col>
        </Row>
        {/* //testing */}
   
        <Row><Footer/></Row>
    </Container>
  );
}

export default LoginSignUpPage;