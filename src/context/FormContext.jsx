import React, { useReducer, createContext } from "react";

/**
 * Creación del contexto global y Provider
 * 
 * Objeto inicial de form
 * @typedef {Object} initialValues 
 * 
 * @typedef {Object} entrenador
 * @property {string} nombre 
 * @property {string} apellido 
 * @property {string} email  
 * 
 * @typedef {Object} pokemon
 * @property {string} nombrePokemon 
 * @property {string} elemento 
 * @property {string} edad
 * 
};
 */
let initialValues = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: ""
  },
  pokemon: {
    nombrePokemon: "",
    tipo: "",
    elemento: "",
    altura: "",
    edad: ""
  }
};


//Creación de la función reducer -> actualiza el state (form) según el action.type
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR" : {
      const { name, value } = action.field;
      return {
        ...state,
        entrenador:{
          ...state.entrenador,
          [name]: value
        }
        
      };
    }
    case "ACTUALIZAR_POKEMON" : {
      const { name, value} = action.field;
      return {
        ...state,
        pokemon:{
          ...state.pokemon,
          [name]: value
        }
      };
    }
    default:
      return state;
  }
};

/**
 * Creación contexto global y PROVIDER que se pasará a cualquier componente que requiera el contexto
 * function updateForm
 * @param {object} input trae propiedades desde el Input de Formulario
 * @property {string} campo nombre de campo de input -> e.target.name
 * @property {string} valor valor de input ingresado -> e.target.value
 * @property {string} tipo propiedad tipo de input -> tipo
 * 
 *  */
export const FormContext = createContext();
const FormContextProvider = ({ children }) => {
  
  const [form, dispatch] = useReducer(reducer, initialValues);

  const updateForm = (input) => {
    const {campo, valor, tipo} = input;
    console.log(input)
    dispatch({
      type: tipo,
      field: {
        name: campo,
        value: valor,
      },
    });
  };

  const data = { form, updateForm };

  return (
    <FormContext.Provider value={data}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
