import React, { useState } from 'react';
import './App.css';
import Select from './myselect/Select'

function App() {

  const languages = [
    { value: 'en', text: 'English' },
    { value: 'he', text: 'עברית' },
    { value: 'fr', text: 'français'}
  ];

  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
     <Select options={languages} value={language} onChange={value => setLanguage(value)}></Select>
     <div className="txt">YOU CHOOSE OPTION: {language}</div>
    </div>
  );
}

export default App;
