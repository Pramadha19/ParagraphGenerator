import React, { useState } from 'react';
import data from './data.json';
import './Body.css';

function Body() {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedParagraphs, setGeneratedParagraphs] = useState([]);

  function generateParagraphs() {
    const selectedData = data.data;
    const paragraphs = [];

    for (let i = 0; i < numParagraphs; i++) {
      const paragraphSet = selectedData[i];
      const keys = Object.keys(paragraphSet);
      const paragraph = paragraphSet[keys[0]];
      paragraphs.push(paragraph);
    }

    setGeneratedParagraphs(paragraphs);
  }

  return (
    <div className='main'>
      <h1 className='heading'>TIRED OF BORING LOREM IPSUM?</h1>
      <label htmlFor="para">Number of Paragraphs:</label>
      <input
        type="number"
        name="para"
        id="para"
        value={numParagraphs}
        onChange={e => setNumParagraphs(parseInt(e.target.value))}
      />
      <button className='gen' onClick={generateParagraphs}>GENERATE</button>
      
      {generatedParagraphs.map((paragraph, index) => (
        <p className='ans' key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Body;