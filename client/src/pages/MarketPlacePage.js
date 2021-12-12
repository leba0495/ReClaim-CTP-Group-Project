import React from "react";
import {Image, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/MarketPlacePage.css';
import SearchBar from "../components/SearchBar";
import Batch from '../components/Batch';
import BatchDetails from "../components/BatchDetails";
import MarketPlaceNav from "../components/MarketPlaceNav";
import Footer from "../components/Footer";
import axios from 'axios';


function MarketDecoration(){
    return (
        <div className="market-decor pl-5">
            <h3>MarketFeed</h3>
            <Image  src="images/market.png"/>
        </div>
    );
}

class MarketPlacePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batches: [],
            currBatch: null,
            showComponent: null,
            newBatch: {},
        }
    }

    // Loads when the component is rendered so using the fake posts I passed Batch components into the Market's batches state
    componentDidMount(){
        // load data from database
        axios.get("/api/")
        .then(response => {
             this.setState({batches: response.data})
            });

    }

    // Arrow functions make it so you don't need the "bind" method 
    handleDetails = (currentBatch) => {
        // The Batch component gives the objectId of the current batch
        this.setState({ currBatch: currentBatch, showComponent: true});

    }

    updateClaimStatus = (batchID) => {
        // Update the status of the current batch
        const batches = this.state.batches;
        const indexOfBatch = batches.findIndex(b => b.id === batchID);
    
        batches[indexOfBatch].isClaimed = !batches[indexOfBatch].isClaimed;

        // Update back end
        axios.put("/api/"+batchID, batches[indexOfBatch])
            .then(res => {
                console.log(res.data)
            })
            .then(this.setState({batches})) 
            .catch(err => {
                console.log("Something is not right!")
                console.log(err)
            })
    }

    render(){
        const batchRecord = this.state.batches.map((batch, ii) => {
            return ( 
                // <Batch title={batch.title} location={batch.location} description={batch.description} image={batch.image} claimStatus={batch.isClaimed} key={ii} />

                // Shorter than previous ways of passing props, using the deconstructor or spread operator (...)
                <Batch { ...batch } handleDetails={this.handleDetails} handleClaimStatus={this.updateClaimStatus} key={ii} ></Batch>)
            
        })
        return (
            <Container fluid="md p-0" className="main-market-container">
                <MarketPlaceNav/>
                <Row className="top-market-row">
                    <Col lg="1" >
                        <MarketDecoration />
                    </Col>
                    <Col>
                        <SearchBar/>
                        <Link to={"/add-batch"}> 
                            <button className="btn-style add-btn">Add a Batch</button> 
                        </Link>                       
                    </Col>
                </Row>
                <Row className="batch-row">
                    <Col className="batches-col">
                        { batchRecord }
                    </Col>
                    <Col className="details-col" >
                        {this.state.showComponent ? <BatchDetails  { ...this.state.batches.find(b => b.id === this.state.currBatch )}></BatchDetails> : null}
                    </Col>
                </Row>
                <Row><Footer/></Row>
                </Container>
        );
    }
}

export default MarketPlacePage;