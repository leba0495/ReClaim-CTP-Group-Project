import React from "react";
import MarketPlaceNav from "../components/MarketPlaceNav";
import {Form, Container, Button, Row, Col, FloatingLabel} from "react-bootstrap";
import "../styles/AddBatch.css"

class AddBatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            title: "",
            description: "",
            location: "",
            address: "",
            locationNotes: "",
            isSorted: false,

        }
    }

    render(){
        return(
            <Container fluid ="md" className="add-batch-container">
                <MarketPlaceNav />
                <Form className="add-batch-form">
                    <Form.Group>
                        <Form.Label>Upload your batch's pictures here</Form.Label>
                        <Form.Control type="file" multiple></Form.Control>
                    </Form.Group>
                    <Row className="mt-2">
                    <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Plastic Bottles" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLocation">
                    <Form.Label>General Location</Form.Label>
                    <Form.Control placeholder="Corner of West and 5th" />
                    </Form.Group>
                </Row>

                <Form.Group className="mt-2" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mt-2">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Bronx"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder="10460"/>
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                <FloatingLabel lg={9} as={Col} controlId="floatingTextarea2" label="Describe what's in your batch of goods.." >
                    <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: '100px'}}
                    />
                </FloatingLabel>

                <Form.Group as={Col} className="" id="formGridCheckbox">
                    <Form.Label> Are your goods separated?</Form.Label>
                    <Form.Select defaultValue="No">
                    <option>No</option>
                    <option>Yes</option>
                        
                    </Form.Select>
                </Form.Group>
                </ Row>

                <Button variant="primary" type="submit" className="btn-style m-3 ">
                    Submit
                </Button>
                
                </Form>
            
            </Container>
        );
    }
}

export default AddBatch;