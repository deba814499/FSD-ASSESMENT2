import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Course Detail</h2>
      <p>Showing details for course ID: {id}</p>
    </div>
  );
}

export default CourseDetail;
