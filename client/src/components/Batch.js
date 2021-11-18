import React from 'react';
import {Card, Image, Button, Row, Col} from 'react-bootstrap';
import BinImage from '../images/bin-recyclable.png';
import { Link } from 'react-router-dom';

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

function Batch(props){
  return (
      <Card className=" card g-0 shadow-sm">
        <Row>
            <Col m="4">
                <Card.Img className="card-img-top p-2" variant="left" src={BinImage} />
            </Col>
            <Col m="8">
                <Card.Body>
                    <Card.Title >A Tittle</Card.Title>
                    <p>Description:</p>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Card.Text>
                    <Button className="btn-style">Claim</Button>
                    <Button className="btn-style">Details</Button>
                </Card.Body>
            </Col>
        </Row>
      </Card>
      
  );
}



export default Batch;