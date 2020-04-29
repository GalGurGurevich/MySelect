import React, { useState } from 'react';
import './Select.css'


export default function Select({options, value, onChange}) {

    const [selectedValue, setSelectedValue] = useState(value);

    const selectedOption = options.find(option => option.value === selectedValue);

    function updateValue(val) {
        onChange(val);
        setSelectedValue(val);
    }

    return(
    <div className="wrapper">
            <div className="toggle">
                {selectedOption.text}
                <div className="arrow"/>
            </div>

            <div className="dropdown">
            {options.map((option) => <div className="option" onClick={() => updateValue(option.value)}>{option.text}</div>)}
            </div> 
        </div>
)}
