// src/components/ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ result }) => {
    return (
        <div>
            <h2>Prediction Result</h2>
            <p>{result}</p>
        </div>
    );
};

export default ResultDisplay;