import React, { useState, useEffect } from 'react';
import './Select.css';

export default function Select({ options, value, onChange, placeholder, allowDeselect }) {

    const [selectedValue, setSelectedValue] = useState(value);
    const [open, setOpen] = useState(false);
    
    useEffect(() => setSelectedValue(value), [value]);
    useEffect(() => {
        function close() { setOpen(false); }

        if (open)
            document.addEventListener('click', close);

        return () => document.removeEventListener('click', close);
    }, [open]);

    const selectedOption = options.find(option => option.value === selectedValue);
    const displayedText = selectedOption ? selectedOption.text : placeholder;

    function updateValue(val) {
        onChange(val);
        setSelectedValue(val);
        setOpen(false);
    }

    return (
        <div className={'wrapper' + (open ? ' open' : '')}>
            <div
                className='toggle'
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(!open);
                }}
            >
                {displayedText}
                <div className='arrow' />
            </div>

            <div className='dropdown'>
                {allowDeselect ? (
                    <div
                        key='__NULL_OPTION_KEY__'
                        className='option'
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            updateValue(null);
                        }}
                    >
                        &nbsp;
                    </div>
                ) : null}
                {options.map(option => (
                    <div
                        key={option.value}
                        value={option.value}
                        className={'option' + (option === selectedOption ? ' selected' : '')}
                        title={option.text}
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            updateValue(option.value);
                        }}
                    >
                        {option.text}&nbsp;
                    </div>
                ))}
            </div>
        </div>
    );
}
