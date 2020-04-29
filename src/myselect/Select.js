import React from 'react';
import './Select.css'


export default function Select() {

    function selectedOption() {
        alert("some msg");
    }

    return(
    <div className="wrapper">
            <div className="toggle">
                Choose an option:
                <div className="arrow"/>
            </div>

            <div className="dropdown">
                <div className="option" onClick={selectedOption}>Option 1!</div>
                <div className="option" onClick={selectedOption}>Option 2!</div>
            </div> 
        </div>
)}
