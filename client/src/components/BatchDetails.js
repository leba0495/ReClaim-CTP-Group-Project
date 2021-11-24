import React from "react";
import {Card, Button, Row, Col} from 'react-bootstrap';
import BinImage from '../images/bin-recyclable.png';

function BatchDetails(props){

    return(
        <Card className="g-0 p-2 shadow-sm batch-details sticky-top scroll " style={{ width: '80%' }}> 
            <Row>
                <Col>
                    <Card.Img className="card-img-top p-2" style={{width: "60%"}} variant="top" src={BinImage} />
                </Col>
                <Card.Body>
                    <Card.Title >{props.title}</Card.Title>
                    <Card.Subtitle>{props.location}</Card.Subtitle>
                    <p>Description:</p>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Button className="btn-style" > { props.status ? <span>Claim</span> : <span>Claimed</span>}</Button>
                </Card.Body>
            </Row>
            <Row>
                <h4>INFORMATION FOR PICK-UP</h4>
                <h5>Location: </h5> 
                <p> ** An actual address** </p>
                <h5>Instructions:</h5> 
                <p> ** If any provided**</p>
            </Row>
        </Card>
    );
}

export default BatchDetails;