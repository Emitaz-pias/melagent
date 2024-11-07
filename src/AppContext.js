// src/AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('GB');
  const [success,setSuccess] =useState(false)

  return (
    <AppContext.Provider value={{ language, setLanguage,success,setSuccess }} >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
