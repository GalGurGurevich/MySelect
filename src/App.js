import React, { useState } from 'react';
import './App.css';
import Select from './myselect/Select'

function App() {

  const languages = [
    { value: 'en', text: 'English' },
    { value: 'he', text: 'עברית' },
    { value: 'fr', text: 'français'}
  ];

  const [language, setLanguage] = useState(null);

  return (
    <div className="App">
     <Select options={languages} value={language} onChange={value => setLanguage(value)} placeholder="Pick Language"></Select>
     <div className="txt">YOU CHOOSE OPTION: {language}</div>
     <button onClick={() => setLanguage('en')}>en</button>
     <button onClick={() => setLanguage('he')}>he</button>
     <button onClick={() => setLanguage('fr')}>fr</button>
    </div>
  );
}

export default App;
