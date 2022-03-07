// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { useState, useReducer, createContext } from "react";

export const FormContext = createContext();

let initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  nombrePokemon: "",
  tipo: "",
  elemento: "",
  altura: "",
  edad: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR": {
      const { name, value } = action.field;
      
      return {
        ...state,
        [name]: value
      };
    }
    default:
      return state;
  }
};

//PROVIDER se pasará a cualquier componente que requiera el contexto
const FormContextProvider = ({ children }) => {
  //const [form, setForm] = useState(initialValues);
  const [form, dispatch] = useReducer(reducer, initialValues);

  const updateForm = (e) => {
    dispatch({
      type: "ACTUALIZAR_ENTRENADOR",
      field: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const data = { form, updateForm };

  return (
    <FormContext.Provider value={data}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
