import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function Home() {
  const student = useContext(StudentContext);
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {student.name}! You are enrolled in {student.course}.</p>
    </div>
  );
}

export default Home;