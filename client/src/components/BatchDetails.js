import React from "react";
import {Card, Row, Col} from 'react-bootstrap';
import "../styles/Batch.css"

function BatchDetails(props){

    return(
        <Card className={`g-0 p-2 shadow-sm batch-details sticky-top scroll ${props.isClaimed ? 'card-status' : '' }`}> 
            <Row>
                <Col>
                    <Card.Img className="card-img-top p-2" style={{width: "60%"}} variant="top" src={props.image} />
                </Col>
                <Card.Body>
                    <Card.Title >{props.title}</Card.Title>
                    <Card.Subtitle>{props.location}</Card.Subtitle>
                    <p>Description:</p>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <button className={`btn-style ${props.isClaimed ? 'btn-status' : '' }`} > { props.isClaimed ? <span>Unclaim</span> : <span>Claim</span>}</button>
                </Card.Body>
            </Row>
            <Row>
                <h4>INFORMATION FOR PICK-UP</h4>
                <h5>Location:</h5> 
                    <p> {props.address}</p>
                <h5>Instructions: </h5> 
                    <p> {props.locationNotes}</p>
            </Row>
        </Card>
    );
}

export default BatchDetails;