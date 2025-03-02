import React, { useState } from 'react';
import InputForm from './InputForm';
import ResultDisplay from './ResultDisplay';

const HomePage = () => {
    const [result, setResult] = useState(null);

    return (
        <div className="container">
            <h1>Medical Insurance Fraud Detection</h1>
            <InputForm onResult={setResult} />
            {result && <ResultDisplay result={result} />}
        </div>
    );
};

export default HomePage;
