import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Student Registration</h3>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className={styles.details}>
          <h4>Submitted Details</h4>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Course:</strong> {submitted.course}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;