import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/height.css';

const HeightAndWeight = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    goal: '',
  });
  const [dci, setDci] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseInt(formData.age);

    let DCI = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    if (formData.goal === 'gain') {
      DCI += 1000;
    } else if (formData.goal === 'loss') {
      DCI -= 500;
    }

    const fullData = { ...formData, DCI: DCI.toFixed(2) };
    localStorage.setItem('userData', JSON.stringify(fullData));
    navigate('/MainPage');
  };

  return (
    <div className="form-page">
      <div className="navbar">
        <button className="back-button" onClick={() => navigate('/login')}>&larr; Back</button>
      </div>
  
      <div className="form-container">
        <h2 className="form-title">User Information Form</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" name="height" required onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" name="weight" required onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Goal:</label>
            <div>
              <input type="radio" id="gain" name="goal" value="gain" required onChange={handleChange} />
              <label htmlFor="gain"><strong>Weight Gain</strong></label>
            </div>
            <div>
              <input type="radio" id="loss" name="goal" value="loss" required onChange={handleChange} />
              <label htmlFor="loss"><strong>Weight Loss</strong></label>
            </div>
          </div>
  
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
  
};

export default HeightAndWeight;
