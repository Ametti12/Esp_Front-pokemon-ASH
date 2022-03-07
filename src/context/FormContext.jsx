// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { useState, createContext } from "react";

export const FormContext = createContext();
let initialValues = {}
//PROVIDER se pasará a cualquier componente que requiera el contexto
const FormContextProvider = ({ children }) => {
    const [form, setForm] = useState(initialValues);
    
  const updateForm = (e) => {
    setForm({ ...form, 
      [e.target.name]: e.target.value});
  };
  const data = {form, updateForm}


  return (
    <FormContext.Provider value={data}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;