import React from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
// import BinImage from '../images/bin-recyclable.png';
import { Link } from 'react-router-dom';
import "../styles/Batch.css"

class Batch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
        // This binding is necessary to make `this` work in the callback
        // this.displayDetails = this.displayDetails.bind(this);
    }

    displayDetails = () => {
        // Pass the id of the batch we want to display more details from
        this.props.handleDetails(this.props.id);
    }

    handleClaim = () => {
        this.props.handleClaimStatus(this.props.id);  
    }

    render(){
        return (
            <Card className={`g-0 shadow-sm m-3 ${this.props.isClaimed ? 'card-status' : '' }` }>
                <Row>
                    <Col m="3">
                        <Card.Img className="card-img-top p-2" variant="left" src={this.props.image} />
                    </Col>
                    <Col m="9">
                        <Card.Body>
                            <Card.Title> {this.props.title } </Card.Title>
                            <Card.Subtitle>{this.props.location}</Card.Subtitle>
                            <p>Description:</p>
                            <Card.Text> { this.props.description} </Card.Text>
                            <button className={`btn-style ${this.props.isClaimed ? 'btn-status' : '' }`} type="submit" onClick={this.handleClaim}> { this.props.isClaimed ? <span>Unclaim</span> : <span>Claim</span>}</button>
                            <button className="btn-style details-btn" onClick={ this.displayDetails }>Details</button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Batch;