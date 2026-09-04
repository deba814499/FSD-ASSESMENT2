import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student] = useState({
    name: 'Debasis Jena',
    course: 'B.Tech CSE',
    college: 'IIT Kharagpur'
  });

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}