import React, { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { getSpecies } from "../services/getSpecies";
import { useQuery } from "react-query";
// Debemos reemplazar este array por los datos provenientes de la API.





const InputEspecie = ({ name, label }) => {
    const [offset, setOffset] = useState(0)
   const {data: species, isPreviousData} = useQuery(`getPokeSpecies${offset}`, () => getSpecies(offset), {keepPreviousData: true})
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [texto, setTexto] = useState('Seleccionar');
    const [count, setCount] = useState(1);
    
  
  const data = useContext(FormContext); //data que llega del .Provider value={data}
  const {updateForm} = data
  
  const elegirEspecie = (e, nombreEspecie) => {
    e.preventDefault();

    updateForm({
        campo: "especiePokemon",
        valor: nombreEspecie, 
        tipo: "ACTUALIZAR_POKEMON"
      })
    setMostrarPopup(false);
    setTexto(nombreEspecie)
  };

  const handleAnterior = () => {
    setOffset((offset) => offset - 20)
    setCount(count - 1 )
  }
  const handleSiquiente = () => {
    setOffset((offset) => offset + 20)
    setCount(count + 1 )
}



  const renderizarEspecies = () => (
    <>
      {species.results?.map((especie) => (
        <button
          key={especie.name}
          className="botones-especie"
          onClick={(e) => elegirEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-contenedor">
     
     {mostrarPopup && (
        <div className="popup-especie">
          <h4>Seleccionar especie</h4>            
          <small>{`Pág ${count}`}</small>

          <div className="contenedor-especies">{renderizarEspecies()}</div>
          
          <div className="paginador">
              
            <button className="boton-anterior" disabled={ !species.previous} onClick={handleAnterior}>Anterior</button>
            <button className="boton-siguiente" disabled={ !species.next} onClick={handleSiquiente}>Siguiente</button>
          </div>
          
          
        </div>
    
      )}

      <p htmlFor={name}>{label}</p>
      <button
        className="boton-seleccionar-especies"
         onClick={() => setMostrarPopup(true)}
      >
        {texto}
      </button>
    </div>
  );
};

export default InputEspecie;