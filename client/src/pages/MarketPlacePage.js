import React from "react";
import {Image, Container, Row, Col} from 'react-bootstrap';
import '../styles/MarketPlacePage.css';
import SearchBar from "../components/SearchBar";
import Batch from '../components/Batch';
import BatchDetails from "../components/BatchDetails";
import MarketPlaceNav from "../components/MarketPlaceNav"
import axios from 'axios';

const POSTS = [
    {
    objectID: 1,
    title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: "images/bin-recyclable.png",
    isClaimed: true,
    },
    {
    objectID: 2,
    title: "Plastic Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: "images/bin-recyclable.png",
    isClaimed: false,
    },
    {
    objectID: 3,
    title: "Some Cans",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: "images/bin-recyclable.png",
    isClaimed: true,
    },
    {
    objectID: 4,
    title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: "images/bin-recyclable.png",
    isClaimed: false,
    },
    {
    objectID: 5,
    title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: "images/bin-recyclable.png",
    isClaimed: false,
    },
];

function MarketDecoration(){
    return (
        <div className="market-decor">
            <h3>MarketFeed</h3>
            <Image  src="images/market.png"/>
        </div>
    );
}

class MarketPlacePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batches: POSTS,
            loading: true,
            currBatch: null,
            showComponent: null,
        }

    }

    // Loads when the component is rendered so using the fake posts I passed Batch components into the Market's batches state
    componentDidMount(){
        // load data from database
        axios.get("/api/")
        .then(response => {console.log(response.data);
             this.setState({batches: response.data})});
        // axios.get('api/')
    }

    // Arrow functions make it so you don't need the "bind" method 
    handleDetails = (currentBatch) => {
        // The Batch component gives the objectId of the current batch
        this.setState({ currBatch: currentBatch, showComponent: true});

    }

    updateClaimStatus = (batchID) => {
        // Update the status of the current batch
        const batches = this.state.batches;
        const indexOfBatch = batches.findIndex(b => b.objectId === batchID);
    
        batches[indexOfBatch].isClaimed = !batches[indexOfBatch].isClaimed ;

        this.setState({batches}); //the state will know that this is referring to the batches
        console.log(batches[indexOfBatch]);
        // Now the button doesn't update the text after clicking?

    }

    render(){
        const batchRecord = this.state.batches.map((batch, ii) => {
            return ( 
                // <Batch title={batch.title} location={batch.location} description={batch.description} image={batch.image} claimStatus={batch.isClaimed} key={ii} />

                // Shorter than previous ways of passing props, using the deconstructor or spread operator (...)
                <Batch { ...batch } handleDetails={this.handleDetails} handleClaimStatus={this.updateClaimStatus} key={ii} ></Batch>)
            
        })
        

        return (
            <Container fluid className="main-market-container">
                <MarketPlaceNav/>
                <Row className="top-market-row">
                    <Col lg="1" >
                        <MarketDecoration />
                    </Col>
                    <Col>
                        <SearchBar/>
                    </Col>
                </Row>
                <Row className="batch-row">
                    <Col className="batches-col">
                        { batchRecord }
                    </Col>
                    <Col className="details-col" >
                        {this.state.showComponent ? <BatchDetails  { ...this.state.batches.find(b => b.objectId === this.state.currBatch )}></BatchDetails> : null}
                    </Col>
                </Row>
                </Container>
        );
    }
}

export default MarketPlacePage;