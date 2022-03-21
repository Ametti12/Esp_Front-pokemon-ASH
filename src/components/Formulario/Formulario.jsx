import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import PropTypes, { func } from "prop-types";
import { useQuery } from "react-query";
import { getPokeTypes } from "../services/getPokeTypes";
import Select from "../Select/Select";
import InputEspecie from "../InputEspecie/InputEspecie";
/**
 * componente Formulario, engloba componente Input
 * @returns {JSX.Element}
 *
 */
const Formulario = () => {
  // async function getData() {
  //   console.log(await getPokeTypes());
  // }
  //   getData()
 
  const { isLoading, isError, isSuccess, data: tipos } = useQuery(
    "getPokeTypes",
    getPokeTypes
  );
  
  if (isLoading) return <div >Cargando personajes...</div>;
  // Si ocurrió un error en el request, mostramos un mensaje en la pantalla.
  if (isError)
    return (
      <div>
        Lo sentimos! no podemos cargar los tipos en este momento. Intenta
        más tarde...
      </div>
    );

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>Entrenador</span>
              </p>
              <Input
                name="nombre"
                label="Nombre"
                tipo="ACTUALIZAR_ENTRENADOR"
              />
              <Input
                name="apellido"
                label="Apellido"
                tipo="ACTUALIZAR_ENTRENADOR"
              />
              <Input
                name="email"
                label="Email"
                type="email"
                tipo="ACTUALIZAR_ENTRENADOR"
              />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>Pokemon</span>
              </p>
              <Input
                name="nombrePokemon"
                label="Nombre"
                tipo="ACTUALIZAR_POKEMON"
              />
              <Select name="tipo" label="Tipo" tipo="ACTUALIZAR_POKEMON" 
              options={tipos} disabled={isLoading || isError}/>
              <Input
                name="elemento"
                label="Elemento"
                tipo="ACTUALIZAR_POKEMON"
              />
              <Input name="altura" label="Altura" tipo="ACTUALIZAR_POKEMON" />
              <Input name="edad" label="Edad" tipo="ACTUALIZAR_POKEMON" />
              <InputEspecie name="especiePokemon" label="Especie" tipo="ACTUALIZAR_POKEMON" />
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
