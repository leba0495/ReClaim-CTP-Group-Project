import React from "react";
import {Card, Image, Row, Col} from 'react-bootstrap';
import MarketImage from '../images/market.png';
import '../styles/MarketPlacePage.css';
import BinImage from '../images/bin-recyclable.png';

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
function SearchBar(props){
    return (
        <div className="bar-main">
            <input 
            type="text"
            placeholder="Look up a city..."
            className="search-input"
            >
            </input>
            <button className="search-btn">Search</button>
        </div>
    ); 
}

function CardElement(props){
    return (
        <Card className=" card g-0 shadow-sm">
            <Card.Img className="card-img-top p-2" variant="left" src={props.batch.image} />
            <Card.Body>
                <Card.Title >{props.batch.title}</Card.Title>
                <p>Description:</p>
                <Card.Text>{ props.batch.description }</Card.Text>
            </Card.Body>
        </Card>
        
    );
}


class MarketPlacePage extends React.Component {
    render(){
        return (
            <div className="market-main">
                <MarketDecoration />
                <SearchBar/>
                <CardElement  batch={POSTS[0]}/>
            </div>
        );
    }
}

export default MarketPlacePage;