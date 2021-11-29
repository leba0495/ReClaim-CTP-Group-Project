import {Button} from 'react-bootstrap';

function SearchBar(props){
    return (
        <>
            <input 
            type="text"
            placeholder="Look up a city..."
            className="search-input"
            >
            </input>
            <button className="search-btn btn">Search</button>
        </>
    ); 
}

export default SearchBar;