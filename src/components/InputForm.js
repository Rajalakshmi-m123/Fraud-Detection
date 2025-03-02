import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './InputForm.css';

const InputForm = ({ onResult }) => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        patientId: '',
        age: '',
        gender: '',
        dateOfAdmission: '',
        dateOfDischarge: '',
        treatment: '',
        billingAmount: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        setError(''); // Reset error message

        // Validate dates
        const admissionDate = new Date(inputData.dateOfAdmission);
        const dischargeDate = new Date(inputData.dateOfDischarge);
        if (dischargeDate < admissionDate) {
            setError('Date of discharge cannot be before the date of admission.');
            setLoading(false);
            return; // Stop further execution
        }

        try {
            const response = await axios.post('http://localhost:5000/predict', inputData);
            if (response.status === 200) { // Check if the response is successful
                onResult(response.data);  // Pass result to parent
                navigate('/results', { state: { result: response.data } }); // Navigate to results page
            }
        } catch (error) {
            console.error('Error fetching prediction:', error);
            setError('Failed to fetch prediction. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <input type="text" name="patientId" value={inputData.patientId} onChange={handleChange} placeholder="Patient ID" required />
            <input type="number" name="age" value={inputData.age} onChange={handleChange} placeholder="Age" required />
            <select name="gender" value={inputData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <input type="date" name="dateOfAdmission" value={inputData.dateOfAdmission} onChange={handleChange} required />
            <input type="date" name="dateOfDischarge" value={inputData.dateOfDischarge} onChange={handleChange} required />
            <input type="text" name="treatment" value={inputData.treatment} onChange={handleChange} placeholder="Treatment" required />
            <input type="number" name="billingAmount" value={inputData.billingAmount} onChange={handleChange} placeholder="Billing Amount" required />
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default InputForm;
