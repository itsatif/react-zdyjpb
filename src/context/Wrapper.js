import React, { useState } from 'react';
import dataContext from './context';
export default function ({ children }) {
  const [data, setData] = useState([<p>Task</p>]);

  function add(newTask) {
    setData([...data, newTask]);
  }
  return (
    <dataContext.Provider value={{ data, add }}>
      {children}
    </dataContext.Provider>
  );
}
