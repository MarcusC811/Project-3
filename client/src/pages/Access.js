import React from 'react';
import './access.css'; // import CSS file for styling

const Access = () => {
  return (
    <div className="access">
      <h1>Acess Denied!</h1>
      <h2>This content is for registered users</h2>
      <p>If you'd like to view SWOLMEMATE's exercise demonstrations either login or register.</p>
      <button>Go to Login/Signup</button>
    </div>
  );
};

export default Access;