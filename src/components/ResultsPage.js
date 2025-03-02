import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const result = location.state?.result || "No result received.";

    return (
        <div style={{ padding: '20px' }}>
            <h1>Prediction Result</h1>
            <p>{result}</p>
        </div>
    );
};

export default ResultsPage;