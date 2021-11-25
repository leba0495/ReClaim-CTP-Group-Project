import React from "react";
import {Card, Image, Button, CardGroup, Container, Row, Col} from 'react-bootstrap';
import MarketImage from '../images/market.png';
import '../styles/MarketPlacePage.css';
import BinImage from '../images/bin-recyclable.png';
import SearchBar from "../components/SearchBar";
import Batch from '../components/Batch';
import BatchDetails from "../components/BatchDetails";

const POSTS = [
    {
    objectID: 1,
    title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: true,
    },
    {
    objectID: 2,
    title: "Plastic Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: false,
    },
    {
    objectID: 3,
    title: "Some Cans",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: true,
    },
    {
    objectID: 4,
    title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: false,
    },
    {
    objectID: 5,
    title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: false,
    },
];

function MarketDecoration(){
    return (
        <div className="market-decor">
            <h3>MarketFeed</h3>
            <Image  src={MarketImage}/>
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
    }

    // This function might help reduce redundancy for the different times we need to find an object but I can't pass the object from this function into the component
    // getObject = () => {
    //     const object = this.state.batches.find(b => b.objectID === this.state.currBatch );
    //     return object
        
    // }

    // Arrow functions make it so you don't need the "bind" method 
    handleDetails = currentBatch => {
        // The Batch component gives the objectId of the current batch
        this.setState({ currBatch: currentBatch, showComponent: true});

    }

    // Passing this as props to Batch may do the trick just need to find the batch and update the status. This should also update the text inside the button?
    updateClaimStatus = (batchID) => {
        // Update the status of the current batch
        const batchToUpdate = this.state.batches.find(b => b.objectID === batchID);
        // In here we need to find the object and then update the claim status
        batchToUpdate.isClaimed = !batchToUpdate.isClaimed;
        console.log(batchToUpdate)
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
                        {this.state.showComponent ? <BatchDetails  { ...this.state.batches.find(b => b.objectID === this.state.currBatch )}></BatchDetails> : null}
                    </Col>
                </Row>
                </Container>
        );
    }
}

export default MarketPlacePage;