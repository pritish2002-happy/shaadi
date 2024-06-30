import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gender.css';

function Gender() {
    const navigate = useNavigate();

    const handleGenderSelect = (gender) => {
        if (gender === 'male') {
            navigate('/brides');
        } else if (gender === 'female') {
            navigate('/grooms');
        }
    };

    return (
        <div className="gender-container">
            <h2>Please select your gender:</h2>
            <button className="gender-button" onClick={() => handleGenderSelect('male')}>Male</button>
            <button className="gender-button" onClick={() => handleGenderSelect('female')}>Female</button>
        </div>
    );
}

export default Gender;
