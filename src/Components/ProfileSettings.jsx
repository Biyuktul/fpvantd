import React, { useState } from 'react';
import '../styles/ProfileSettings.css';

export default function ProfileSettings() {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');

  const handlefNameChange = (event) => {
    setfName(event.target.value);
  };
  const handlelNameChange = (event) => {
    setlName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ fname, email, password, bio });
    // Send data to server or update state here
  };

  return (
    <form className="profile-settings" onSubmit={handleSubmit}>
      <h2>Profile Settings</h2>
      <div className="form-group">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" value={fname} onChange={handlefNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" value={lname} onChange={handlelNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input type="text" id="contact" value={contact} onChange={handleContactChange} />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={handleCityChange} />
      </div>
      <button type="submit" className='submit-button'>Save Changes</button>
    </form>
  );
}
