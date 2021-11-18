import {Card, Image, Button} from 'react-bootstrap';

function SearchBar(props){
    return (
        <div className="bar-main">
            <input 
            type="text"
            placeholder="Look up a city..."
            className="search-input"
            >
            </input>
            <Button className="search-btn">Search</Button>
        </div>
    ); 
}

export default SearchBar;