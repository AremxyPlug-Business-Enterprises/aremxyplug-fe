import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <DataContext.Provider value={{ selectedProduct, selectedOption, setSelectedProduct, setSelectedOption }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
