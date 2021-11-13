import React from "react";
import {Card} from 'react-bootstrap';
import '../styles/MarketPlacePage.css';

function SearchBar(props){
    return (
        <div>
            <input 
            type="text"
            placeholder="Look up a city..."
            className="search-bar"
            results="0"
            >
            </input>
            <button className="search-btn">Search</button>
        </div>
    ); 
}



class MarketPlacePage extends React.Component {
    render(){
        return (
            <div className="market-main">
            <h1>Hello</h1>
            <SearchBar/>
            </div>
        );
    }
}

export default MarketPlacePage;