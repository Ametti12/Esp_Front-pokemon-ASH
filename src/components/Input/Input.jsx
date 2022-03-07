import React, {useState, useContext} from "react";
import { FormContext } from "../../context/FormContext";

const Input = ({ name, label, type = "text" }) => {
  
  const data = useContext(FormContext); //data que llega del .Provider value={data}
  const {updateForm} = data

  
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const [valor, setValor] = useState('');

  const handleChange = (e) => {
    setValor(e.target.value);
    //updateForm(e)
    // Aquí deberíamos actualizar el estado local del input.
  };

  const onBlur = (e) => {
    e.preventDefault();
    updateForm(e)
  
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
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