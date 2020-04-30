import React, { useState } from 'react';
import './App.css';
import Select from './myselect/Select'

function App() {

  const languages = [
    { value: 1, text: 'English' },
    { value: 2, text: 'עברית' },
    { value: 3, text: 'français'}
  ];

  const [language, setLanguage] = useState(null);

  return (
    <div className="App">
     <Select options={languages} value={language} onChange={value => setLanguage(value)} placeholder="Pick Language"></Select>
     <div className="txt">YOU CHOOSE OPTION: {language}</div>
     <button onClick={() => setLanguage(1)}>en</button>
     <button onClick={() => setLanguage(2)}>he</button>
     <button onClick={() => setLanguage(3)}>fr</button>
    </div>
  );
}

export default App;
