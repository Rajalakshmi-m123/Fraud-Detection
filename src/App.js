import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './components/InputForm';
import ResultsPage from './components/ResultsPage';

const App = () => {
    const [result, setResult] = useState(null); // Store prediction result

    return (
        <Router>
            <Routes>
                <Route path="/" element={<InputForm onResult={setResult} />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
