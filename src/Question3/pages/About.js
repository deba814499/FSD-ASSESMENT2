import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function About() {
  const student = useContext(StudentContext);
  return (
    <div>
      <h2>About</h2>
      <p>This app manages course info for {student.name} from {student.college}.</p>
    </div>
  );
}

export default About;