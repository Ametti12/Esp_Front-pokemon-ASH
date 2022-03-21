import React, {useContext, useEffect, useState} from "react";
import { FormContext } from "../../context/FormContext";
import { postPokeForm } from "../services/postPokeform";
import { useMutation } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from 'react-loading';

/**
 * componente Detalle, muestra previsualización de los valores llenados en los campos de
 * Formulario
 * @returns {JSX.Element}
 */
const Detalle = () => {

  const data = useContext(FormContext);
  const {form} = data

  const {nombre, apellido, email} = form?.entrenador;
  const {nombrePokemon, tipo, elemento, edad, altura, especiePokemon} = form?.pokemon;
  

  //Manejamos los estados de la petición con useMutation
  const { mutate, isSuccess, isError, error, data:pokemon, isLoading, isIdle } = useMutation(postPokeForm);
  
  // useEffect(()=>{
  //   isSuccess && setText( `Pokemon enviado exitosamente - Id: ${pokemon.id}`)
  //   isError && setText(`Error!: ${error.message}`)
  // },[isSuccess, isError])

  const handleSubmit = () => {
    mutate(form)
  }
  

  return (
    <>

    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: <span>{nombre}</span></p>
          <p>Apellido: <span>{apellido}</span></p>
          <p>Email: <span>{email}</span></p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{nombrePokemon}</p>
          <p>Tipo:{tipo}</p>
          <p>Elemento:{elemento}</p>
          <p>Altura:{altura}</p>
          <p>Edad:{edad}</p>
          <p>Especie: {especiePokemon}</p>
        </div>
      </section>

      <section className="loading">
        {isLoading ? <ReactLoading type='spokes' color="#F3A2A2" height={30} width={30} />
      : 
      <button
        className="boton-enviar"
        onClick={handleSubmit}
      > {isSuccess ? <p><FontAwesomeIcon icon={faCircleCheck}/> Tu Pokemon ha sido Registrado! Id:{pokemon.id} </p>  : 'Enviar'}
      {isError ? error.message  : null}
      </button>}

      </section>

      
      
      
    </div>
    </>
  );
  
};

export default Detalle;
