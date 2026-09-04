import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Student from './Question1/Student';
import RegistrationForm from './Question2/RegistrationForm';
import App3 from './Question3/App3';

function Question1Page() {
  return (
    <div>
      <h2>Practical Question 1: Student Profile</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Student name="Aditi Sharma" course="B.Tech CSE" college="IIT Kharagpur" />
        <Student name="Rohan Mehta" course="BCA" college="St. Xavier's College" />
      </div>
    </div>
  );
}

function Question2Page() {
  return (
    <div>
      <h2>Practical Question 2: Student Registration Form</h2>
      <RegistrationForm />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/q1" style={{ marginRight: '15px' }}>Question 1</Link>
          <Link to="/q2" style={{ marginRight: '15px' }}>Question 2</Link>
          <Link to="/q3">Question 3</Link>
        </nav>
        <Routes>
          <Route path="/q1" element={<Question1Page />} />
          <Route path="/q2" element={<Question2Page />} />
          <Route path="/q3/*" element={<App3 />} />
          <Route path="/" element={<Question1Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;