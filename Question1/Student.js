import React from 'react';

function Student(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '250px'
    }}>
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>College:</strong> {props.college}</p>
    </div>
  );
}

export default Student;