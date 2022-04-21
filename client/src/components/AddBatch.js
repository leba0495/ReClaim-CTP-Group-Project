import React from "react";
import MarketPlaceNav from "../components/MarketPlaceNav";
import Footer from "../components/Footer";
import {Form, Container, Button, Row, Col, FloatingLabel} from "react-bootstrap";
import axios from 'axios';
import "../styles/AddBatch.css";
import DefaultImage from '../../public/images/default.png';

class AddBatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: {},
            title: "",
            description: "",
            location: "",
            address: "",
            locationNotes: "",
            isSorted: false,
            error: false,
        }
    }
    
    saveBatch = (event) => {
        // Form submitting logic, prevent default page refresh (loses eveything plus state)
        event.preventDefault()
        const data = new FormData();

        data.append('image', this.state.image);
        data.append('title', this.state.title);
        data.append('description', this.state.description);
        data.append('location', this.state.location);
        data.append('address', this.state.address);
        data.append('locationNotes', this.state.locationNotes);
        data.append('isSorted', this.state.isSorted);
        axios.post('/api/batches/', data)
            .then((res) => {
                this.props.history.push("/market-place")
            })
            .catch((error) => {
                this.setState({error: true})
            })
    }

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value 
        })
        
    }

    handleImageUpload = (e) => {
        let batchImage = (e.target.file.length > 0) ? e.target.files[0] : DefaultImage;

        this.setState({
            image: batchImage,
        })
    }
    
    render(){
        let errorMessage = null;
        if(this.state.error) {
            errorMessage = (
                <div className="alert alert-danger">
                "There was an error saving this batch."
                </div>
        );
        }
        return(
            <Container className="p-0 bg" fluid="md" style={{ backgroundImage: "url(/images/loginBG.png)" }}>
                <MarketPlaceNav />
                    {errorMessage}
                    <Form className="add-batch-form" onSubmit={this.saveBatch}>
                        <Form.Group>
                            <Form.Label>Upload your batch's pictures here</Form.Label>
                            <Form.Control type="file" multiple onChange={this.handleImageUpload}></Form.Control>
                        </Form.Group>
                        <Row className="mt-2">
                        <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label >Title</Form.Label>
                        <Form.Control 
                        required
                        type = "text"
                        minLength="4"
                        placeholder="Plastic Bottles" 
                        name="title"
                        onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Label>General Location</Form.Label>
                        <Form.Control
                        required
                        type = "text"
                        minLength="4"
                        placeholder="Corner of West and 5th" 
                        name="location"
                        onChange={this.handleChange}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mt-2" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                        required
                        type = "text"
                        minLength="4" 
                        placeholder="1234 Main St, Bronx, NY 10460" 
                        name="address"
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Row className="mt-3">
                    <FloatingLabel lg={9} as={Col} controlId="floatingTextarea2" label="Describe what's in the batch.." >
                        <Form.Control
                        required
                        as="textarea"
                        name="description"
                        placeholder=""
                        style={{ height: '100px'}}
                        onChange={this.handleChange}
                        />
                    </FloatingLabel>

                    <Form.Group as={Col} className="" id="formGridCheckbox">
                        <Form.Label > Are your goods separated?</Form.Label>
                        <Form.Select defaultValue="No" name="isSorted" onChange={this.handleChange}>
                        <option value={`${false}`}>No</option>
                        <option value={`${true}`}>Yes</option>  
                        </Form.Select>
                    </Form.Group>

                    </ Row>
                    <Row className="mt-3 g-0 p-0" >
                        <Form.Label as={Col} lg={8} md={12}>If you've placed the batch in a hidden location. Leave some instructions for the collector here.
                        <Form.Control
                        as="textarea"
                        name="locationNotes"
                        placeholder="Hints and notes here.."
                        style={{ height: '120px'}}
                        onChange={this.handleChange}
                        />
                        </Form.Label>
                    </Row>

                    <Button variant="primary" type="submit"
                    className="btn-style m-3 "> Submit </Button>
                    </Form>

                <Row><Footer /></Row>
            </Container>
        );
    }
}

export default AddBatch;