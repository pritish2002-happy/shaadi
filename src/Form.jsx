  // src/Form.js
  
  import React, { useState } from 'react';
  import './Form.css';  // Import the CSS file

  const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      dob: '',
      time: '', 
      location: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Name: ${formData.name}\nDOB: ${formData.dob}\nTime: ${formData.time}\nLocation: ${formData.location}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default Form;
