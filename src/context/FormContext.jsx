import React, { useReducer, createContext } from "react";
import PropTypes from "prop-types";

/**
 * Creación del contexto global y Provider
 
 * @typedef {Object} initialValues Objeto inicial de form
 * @property {Object} entrenador 
 * @property {string} entrenador.nombre
 * @property {string} entrenador.apellido
 * @property {string} entrenador.email
 * 
 * @property {Object} pokemon
 * @property {string} pokemon.nombrePokemon
 * @property {string} pokemon.tipo
 * @property {string} pokemon.elemento
 * @property {string} pokemon.altura
 * @property {string} pokemon.edad
 * 
 */

let initialValues = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: "",
  },
  pokemon: {
    nombrePokemon: "",
    tipo: "",
    elemento: "",
    altura: "",
    edad: "",
  },
};

/**
 * Creación de la función reducer -> actualiza el state (form) según el action.type
 * @param {initialValues} state
 * @param {{
 * type: string,
 * field: {
 * name: string,
 * value: string}}} action
 * @returns {initialValues}
 *
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR": {
      const { name, value } = action.field;
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          [name]: value,
        },
      };
    }
    case "ACTUALIZAR_POKEMON": {
      const { name, value } = action.field;
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [name]: value,
        },
      };
    }
    default:
      return state;
  }
};

/**
 * Creación contexto global y PROVIDER que se pasará a cualquier componente que requiera el contexto
 * function updateForm
 * @param {{campo: string,
 * valor: string,
 * tipo: string}} input trae propiedades desde el Input de Formulario 
 *  */
export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [form, dispatch] = useReducer(reducer, initialValues);

  const updateForm = (input) => {
    const { campo, valor, tipo } = input;
    console.log(input);
    dispatch({
      type: tipo,
      field: {
        name: campo,
        value: valor,
      },
    });
  };

  const data = { form, updateForm };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}



export default FormContextProvider;
