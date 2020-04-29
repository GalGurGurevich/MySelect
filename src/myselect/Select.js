import React, { useState } from 'react';
import './Select.css'


export default function Select({options, value, onChange, placeholder, allowDeselect}) {

    const [selectedValue, setSelectedValue] = useState(value);

    const selectedOption = options.find(option => option.value === selectedValue);
    const displayedText = selectedOption
        ? selectedOption.text
        : placeholder;

    function updateValue(val) {
        onChange(val);
        setSelectedValue(val);
    }

    return(
    <div className="wrapper">
            <div className="toggle">
                {displayedText}
                <div className="arrow"/>
            </div>

            <div className="dropdown">
            {allowDeselect ? <div className="option" onClick={() => updateValue(null)}>&nbsp;</div> : null}
            {options.map((option) => <div className="option" onClick={() => updateValue(option.value)}>{option.text}&nbsp;</div>)}
            </div> 
        </div>
)}
