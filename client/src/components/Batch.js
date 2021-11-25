import React from 'react';
import {Card, Image, Button, Row, Col, Container} from 'react-bootstrap';
// import BinImage from '../images/bin-recyclable.png';
import { Link } from 'react-router-dom';
import BatchDetails from './BatchDetails';

// ** From The Project Starter ** 

// function Post({ content, createdAt, id }) {
//   return (
//     <div className="col-10 col-md-8 col-lg-7">
//       <div className="card mb-4 shadow">
//         <div className="card-body card-text">
//           <Link to={"/posts/"+id}>{ content }</Link>
//         </div>
//         <div className="card-footer small text-muted text-right">
//           { createdAt }
//         </div>
//       </div>
//     </div>
//   );
// }

// function Batch(props){
    
//     function displayDetails() {
//         //console.log("HELLLOOO");
//         <BatchDetails></BatchDetails>
        
//     }
//     return (
//       <Card className=" card g-0 shadow-sm">
//         <Row>
//             <Col m="4">
//                 <Card.Img className="card-img-top p-2" variant="left" src={props.image} />
//             </Col>
//             <Col m="8">
//                 <Card.Body>
//                     <Card.Title> { props.title } </Card.Title>
//                     <p>Description:</p>
//                     <Card.Text> { props.description } </Card.Text>
//                     <Button className="btn-style">Claim</Button>
//                     <Button className="btn-style" onClick={ displayDetails }>Details</Button>
//                 </Card.Body>
//             </Col>
//         </Row>
//       </Card>
      
//     );
// }

class Batch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            claimStatus: null,
            buttonText: this.props.isClaimed ? "Claimed" : "Claim",
        };
        // This binding is necessary to make `this` work in the callback
        // this.displayDetails = this.displayDetails.bind(this);
    }

    displayDetails = () => {
        // Pass the id of the batch we want to display more details from
        this.props.handleDetails(this.props.objectID);
    }

    handleClaim = () => {
        // Needed to do another function to avoid confusion between the batch that is being claimed and the batch that is getting details displayed
        this.props.handleClaimStatus(this.props.objectID);
        this.setState({claimStatus: !this.props.isClaimed, buttonText: this.state.claimStatus ? "Claimed" : "Claim"});
        console.log(this.state.claimStatus);
        
    }

    render(){
        const { buttonText } = this.state;
        return (
            <Card className="g-0 shadow-sm m-3">
                <Row>
                    <Col m="3">
                        <Card.Img className="card-img-top p-2" variant="left" src={this.props.image} />
                    </Col>
                    <Col m="9">
                        <Card.Body>
                            <Card.Title> {this.props.title } </Card.Title>
                            <Card.Subtitle>{this.props.location}</Card.Subtitle>
                            <p>Description:</p>
                            <Card.Text> { this.props.description } </Card.Text>
                            {/* <Button className="btn-style" type="submit" onClick={this.handleClaim}> { this.props.isClaimed ? <span>Claimed</span> : <span>Claim</span>}</Button> */}
                            <Button className="btn-style" type="submit" onClick={this.handleClaim}> {buttonText}</Button>
                            <Button className="btn-style" onClick={ this.displayDetails }>Details</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Batch;