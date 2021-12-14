import React from 'react';
import {Card, Row, Col, Container, Image} from 'react-bootstrap';
// import BinImage from '../images/bin-recyclable.png';
import "../styles/Batch.css"

class Batch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
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
            <Card className={`g-0 shadow-sm m-3 whole-card ${this.props.isClaimed ? 'card-status' : '' }` }>
                <Row>
                    <Col m="3" className='p-11'>
                        <Card.Img className=" card-img-top p-2" variant="left" src={this.props.image} />
                    </Col>
                    <Col m="9" >
                        <Card.Body>
                            <Card.Title className='p-1'> <strong>{this.props.title }</strong> </Card.Title>
                            <Card.Subtitle> <Image id="tag-img" src="images/locationTag.jpg" /> {this.props.location} </Card.Subtitle>
                            <Card.Text className='p-1'> <strong>Description:</strong> { this.props.description} </Card.Text>
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