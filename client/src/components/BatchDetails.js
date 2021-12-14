import React from "react";
import {Card, Row, Col, Image} from 'react-bootstrap';
import "../styles/Batch.css"

function BatchDetails(props){

    return(
        <Card className={`g-0 p-2 m-3 shadow-sm whole-card batch-details scroll sticky-top  ${props.isClaimed ? 'card-status' : '' }`}> 
            <Row>
                <Col>
                    <Card.Img className="card-img-top p-2" style={{width: "60%"}} variant="top" src={props.image} />
                </Col>
                <Card.Body>
                    <Card.Title> <strong>{props.title }</strong> </Card.Title>
                    <Card.Subtitle> <Image id="tag-img" src="images/locationTag.jpg" /> {props.location}</Card.Subtitle>
                    <Card.Text className="p-2"> <strong>Description: </strong>
                    {props.description}
                    </Card.Text>
                    <button className={`btn-style ${props.isClaimed ? 'btn-status' : '' }`} > { props.isClaimed ? <span>Unclaim</span> : <span>Claim</span>}</button>
                    <Card.Footer>
                        <h4>INFORMATION FOR PICK-UP</h4>
                        <h5>Location:</h5>
                        <p>{props.address}</p>
                        <h5>Instructions:</h5>
                        <p>{props.locationNotes}</p>
                    </Card.Footer>
                </Card.Body>
            </Row>
        </Card>
    );
}

export default BatchDetails;