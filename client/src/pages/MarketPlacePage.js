import React from "react";
import {Card, Image, Button, CardGroup} from 'react-bootstrap';
import MarketImage from '../images/market.png';
import '../styles/MarketPlacePage.css';
import BinImage from '../images/bin-recyclable.png';
import SearchBar from "../components/SearchBar";
import Batch from '../components/Batch';

const POSTS = [
    {title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: true,
    },
    {title: "Plastic Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: false,
    },
    {title: "Some Cans",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: true,
    },
    {title: "Wine Bottles",
    location: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    isClaimed: false,
    },
    {title: "Wine Bottles",
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
    state = {
        batches: POSTS,
        loading: true,
    }

    // Loads when the component is rendered so using the fake posts I passed Batch components into the Market's batches state
    componentDidMount(){
    }

    render(){
        const batchRecord = this.state.batches.map((batch, ii) => {
            return ( 
                <Batch title={batch.title} location={batch.location} description={batch.description} image={batch.image} claimStatus={batch.isClaimed} key={ii} />)
            
        })
        return (
            <div className="market-main">
                <MarketDecoration />
                <SearchBar/>
                
                { batchRecord }
                
            </div>
        );
    }
}

export default MarketPlacePage;