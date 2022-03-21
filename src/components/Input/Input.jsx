import React, {useState, useContext} from "react";
import { FormContext } from "../../context/FormContext";
import PropTypes from "prop-types";

const Input = ({ name, label, type = "text", tipo}) => {
  
  const data = useContext(FormContext); //data que llega del .Provider value={data}
  const {updateForm} = data
  const [valor, setValor] = useState('');

/**
 * handleChange función ejecutada cuando el valor del input es modificado.
 * @param {InputEvent} e 
 */
  const handleChange = (e) => {
    setValor(e.target.value);
    //updateForm(e)
    // Aquí deberíamos actualizar el estado local del input.
  };

/**
 * onBlur función ejecutada cuando el usuario deja el campo del input.
 * @param {InputEvent} e 
 */
  const onBlur = (e) => {
    e.preventDefault();
    updateForm({
      campo: name,
      valor: valor, 
      tipo: tipo
    })
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={valor}
        id={name}
        onChange={handleChange}
        onBlur={onBlur}
        
      />
    </div>
  );
};

Input.propTypes ={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  tipo: PropTypes.string.isRequired,
}
export default Input;