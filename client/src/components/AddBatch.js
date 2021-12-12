import React from "react";
import MarketPlaceNav from "../components/MarketPlaceNav";
import Footer from "../components/Footer";
import {Form, Container, Button, Row, Col, FloatingLabel} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import "../styles/AddBatch.css";

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
            success: false,
            error: false,
        }
    }
    // Form submitting logic, prevent default page refresh
    saveBatch = (event) => {
        let newBatch = {
            image: "",
            title: this.state.title,
            description: this.state.description,
            location: this.state.location,
            address: this.state.address,
            locationNotes: this.state.locationNotes,
            isSorted: false,
        }

        axios.post('/api/batches/', newBatch)
            .then((res) => {
                console.log(res.data)
            })
            .then(() => {
                this.setState({success: true})
            })
            .catch((error) => {
                console.log(error)
            })
        
        
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    onChangeLocation = (e) => {
        this.setState({
            location: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        });
    }
    onChangeNotes = (e) => {
        this.setState({
            locationNotes: e.target.value
        });
    }

    render(){
        if(this.state.success) return <Redirect to="/market-place" />;

        let errorMessage = null;
        if(this.state.error) {
            errorMessage = (
                <div className="alert alert-danger">
                "There was an error saving this batch."
                </div>
        );
        }
        return(
            <div className="p-0 bg" style={{ backgroundImage: "url(/images/loginBG.png)" }}>
                <MarketPlaceNav />
                    {errorMessage}
                    <Form className="add-batch-form">
                        <Form.Group>
                            <Form.Label>Upload your batch's pictures here</Form.Label>
                            <Form.Control type="file" multiple ></Form.Control>
                        </Form.Group>
                        <Row className="mt-2">
                        <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label >Title</Form.Label>
                        <Form.Control placeholder="Plastic Bottles" name="title"
                        onChange={this.onChangeTitle}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Label>General Location</Form.Label>
                        <Form.Control placeholder="Corner of West and 5th" name="location"
                        onChange={this.onChangeLocation}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mt-2" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St, Bronx, NY 10460" name="address"
                        onChange={this.onChangeAddress}/>
                    </Form.Group>

                    {/* <Row className="mt-2">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Bronx" 
                        onChange={this.onChangeAddress}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>New York</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="10460"/>
                        </Form.Group>
                    </Row> */}

                    <Row className="mt-3">
                    <FloatingLabel lg={9} as={Col} controlId="floatingTextarea2" label="Describe what's in the batch.." >
                        <Form.Control
                        as="textarea"
                        name="description"
                        placeholder=""
                        style={{ height: '100px'}}
                        onChange={this.onChangeDescription}
                        />
                    </FloatingLabel>

                    <Form.Group as={Col} className="" id="formGridCheckbox">
                        <Form.Label> Are your goods separated?</Form.Label>
                        <Form.Select defaultValue="No" onChange={(e) => this.setState({isSorted: e.target.value}) }>
                        <option value={`${false}`}>No</option>
                        <option value={`${true}`}>Yes</option>  
                        </Form.Select>
                    </Form.Group>

                    </ Row>
                    <Row className="mt-3 g-0 p-0" >
                        <Form.Label as={Col} lg={8} md={12}>If you've placed the batch in a hidden location. Leave some notes for the collector here.
                        <Form.Control
                        as="textarea"
                        name="locationNotes"
                        placeholder="Hints and notes here.."
                        style={{ height: '120px'}}
                        onChange={this.onChangeNotes}
                        />
                        </Form.Label>
                    </Row>

                    <Button variant="primary"
                    className="btn-style m-3 "
                    onClick={this.saveBatch}>
                        Submit
                    </Button>
                    
                    </Form>

                <Row><Footer /></Row>
            </div>
        );
    }
}

export default AddBatch;