import React from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
// import BinImage from '../images/bin-recyclable.png';
import { Link } from 'react-router-dom';
import "../styles/Batch.css"

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
//                     <button className="btn-style">Claim</button>
//                     <button className="btn-style" onClick={ displayDetails }>Details</button>
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
        };
        // This binding is necessary to make `this` work in the callback
        // this.displayDetails = this.displayDetails.bind(this);
    }

    displayDetails = () => {
        // Pass the id of the batch we want to display more details from
        this.props.handleDetails(this.props.objectId);
    }

    handleClaim = () => {
        this.props.handleClaimStatus(this.props.objectId);  
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
                            <Card.Title> {this.props.description } </Card.Title>
                            <Card.Subtitle>{this.props.location}</Card.Subtitle>
                            <p>Description:</p>
                            <Card.Text> { this.props.bac } </Card.Text>
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