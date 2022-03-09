/**
 * 
 * @author Angelica M
 * @param {string}
 * 
 */
import React, {useState, useContext} from "react";
import { FormContext } from "../../context/FormContext";

const Input = ({ name, label, type = "text", tipo}) => {
  
  const data = useContext(FormContext); //data que llega del .Provider value={data}
  const {updateForm} = data

  // También, utilizaremos un estado local para manejar el estado del input.
  const [valor, setValor] = useState('');

  const handleChange = (e) => {
    setValor(e.target.value);
    //updateForm(e)
    // Aquí deberíamos actualizar el estado local del input.
  };

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

export default Input;