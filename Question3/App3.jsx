import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';

function App3() {
  return (
    <StudentProvider>
      <div>
        <nav style={{ marginBottom: '10px' }}>
          <Link to="/q3" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/q3/courses" style={{ marginRight: '10px' }}>Courses</Link>
          <Link to="/q3/about">About</Link>
        </nav>
        <Routes>
          <Route path="/q3" element={<Home />} />
          <Route path="/q3/courses" element={<Courses />} />
          <Route path="/q3/course/:id" element={<CourseDetail />} />
          <Route path="/q3/about" element={<About />} />
        </Routes>
      </div>
    </StudentProvider>
  );
}

export default App3;
