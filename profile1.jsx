import React from 'react';
import './Profile.css'; // Optional: move styles here if using CSS file

const NameProfile = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '40px'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Name</h1>
      <h2 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '20px' }}>Company</h2>
      <img 
        src="image1.jpg" 
        alt="Person" 
        style={{
          width: '300px',
          height: 'auto',
          marginBottom: '20px',
          borderRadius: '8px'
        }} 
      />
      <p style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'left',
        fontSize: '16px'
      }}>
        This is a placeholder for a detailed paragraph about the person.
      </p>
    </div>
  );
};

export default NameProfile;
