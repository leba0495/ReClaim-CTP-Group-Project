import React from "react";
import {Card, Image, Button} from 'react-bootstrap';
import MarketImage from '../images/market.png';
import '../styles/MarketPlacePage.css';
import BinImage from '../images/bin-recyclable.png';
import SearchBar from "../components/SearchBar";
import Batch from '../components/Batch';

const POSTS = [
    {title: "Wine Bottles",
    address: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    },
    {title: "Wine Bottles",
    address: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    },
    {title: "Wine Bottles",
    address: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    },
    {title: "Wine Bottles",
    address: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
    },
    {title: "Wine Bottles",
    address: "Bronx, NY",
    description: "I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles.",
    image: BinImage,
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
        batches: [],
        loading: true,
    }

    // Loads when the component is rendered so using the fake posts I passed Batch components into the Market's batches state
    componentDidMount(){
        this.setState({ batches: POSTS.map((b, ii) => <Batch {...b} key={ii} />)});
    }

    render(){
        return (
            <div className="market-main">
                <MarketDecoration />
                <SearchBar/>
                {this.state.batches}
            </div>
        );
    }
}

export default MarketPlacePage;