import React from 'react';
// import './access.css'; // import CSS file for styling


const Access = () => {
    
  return (
    <div className="access">
      <h1>Access Denied!</h1>
      <h2>This content is for registered users</h2>
      <p>If you'd like to view SWOLMEMATE's exercise demonstrations, please login or register below</p>
      <a href="/login" className="accessBtn" >Go to Login/Signup</a>
    </div>
  );
};



export default Access;
