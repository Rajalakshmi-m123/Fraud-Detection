import React from 'react';
import { useLocation } from 'react-router-dom';

const NewPage = () => {
    const location = useLocation();
    const result = location.state?.result || "No result received.";

    return (
        <div>
            <h1>Prediction Result</h1>
            <p>{result}</p>
        </div>
    );
};

export default NewPage;
