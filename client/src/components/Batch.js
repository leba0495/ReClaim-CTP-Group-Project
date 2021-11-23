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
            objectId: '',
            title: this.props.title,
            location: this.props.location,
            description: this.props.description,
            image: this.props.image,
            isClaimed: this.props.claimStatus,
            showComponent: false,
        };
        // This binding is necessary to make `this` work in the callback
        this.displayDetails = this.displayDetails.bind(this);
    }

    displayDetails() {
        this.setState( prevState => ({
            showComponent: !prevState.showComponent, })
        );
    }

    render(){
        return (
            <Container fluid>
                <Row >
                    <Col> 
                        <Card className=" g-0 shadow-sm m-3">
                            <Row>
                                <Col m="4">
                                    <Card.Img className="card-img-top p-2" variant="left" src={this.state.image} />
                                </Col>
                                <Col m="8">
                                    <Card.Body>
                                        <Card.Title> {this.state.title } </Card.Title>
                                        <Card.Subtitle>{this.state.location}</Card.Subtitle>
                                        <p>Description:</p>
                                        <Card.Text> { this.state.description } </Card.Text>
                                        <Button className="btn-style" > { this.state.isClaimed ? <span>Claim</span> : <span>Claimed</span>}</Button>
                                        <Button className="btn-style" onClick={ this.displayDetails }>Details</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        {this.state.showComponent ? <BatchDetails title={this.state.title} location={this.state.location} description={this.state.description} image={this.state.image} status={this.state.isClaimed}
                        ></BatchDetails> : null}
                    </Col>
                </Row>
            </Container>  
        );
    }
}

export default Batch;