import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'React Basics' },
  { id: 2, title: 'Advanced JavaScript' }
];

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>
            <Link to={`/q3/course/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;