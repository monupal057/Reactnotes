import React from 'react';
import { useParams } from 'react-router-dom';

function Student() {
  const { id } = useParams();

  return (
    <div>
      <h2>Student Details</h2>
      <p>Student ID: {id}</p>
      {/* Add student details based on the 'id' parameter */}
    </div>
  );
}

export default Student;
