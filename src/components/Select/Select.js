import React, { useState, useContext } from 'react'
import { FormContext } from "../../context/FormContext";
import PropTypes from "prop-types";

const Select = ({ name, label, options, disabled }) => {

    const data = useContext(FormContext); //data que llega del .Provider value={data}
    const { updateForm } = data

    /**
 * handleChange función ejecutada cuando el valor del input es modificado.
 * @param {InputEvent} e 
 */
    const handleChange = (e) => {
        updateForm({
            campo: 'tipo',
            valor: e.target.value,
            tipo: 'ACTUALIZAR_POKEMON'
        })
    };

    return (
       
        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                onChange={handleChange}
                disabled={disabled}
            >
                <option>Selecciona el tipo de tu Pókemon</option>
                
                {options?.length? 
                options.map((tipo) => (
                    <option key={tipo.name} value={tipo.name}>
                        {tipo.name}</option> ))
                        : null}
            </select>
        </div>
    )
}

Select.propTypes ={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    disabled: PropTypes.bool
  }
export default Select