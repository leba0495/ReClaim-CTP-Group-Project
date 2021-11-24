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
            <Button className="search-btn">Search</Button>
        </>
    ); 
}

export default SearchBar;