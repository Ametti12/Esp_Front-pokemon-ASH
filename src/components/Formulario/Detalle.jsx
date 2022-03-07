import React, {useContext} from "react";
import { FormContext } from "../../context/FormContext";

const Detalle = () => {
  
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  //const  inputValue = useContext(FormContext);
  const data = useContext(FormContext);
  const {form} = data

  return (
    <>
    {console.log(form)}
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {form.nombre}</p>
          <p>Apellido: {form.apellido}</p>
          <p>Email: {form.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{form.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
    </>
  );
  
};

export default Detalle;
