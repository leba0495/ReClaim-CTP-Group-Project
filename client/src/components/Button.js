import React from 'react';

//Tried to make a button component but the CSS doesn't seem to work properly for when used in the market place page.

const CustomButton = ({ handleClick, children }) => (

    
    <button type="button" onClick={ handleClick}>{children} </button>
);

export default CustomButton;