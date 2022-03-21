/**
 * Función de petición GET para tipos Pokemon a la API
 */

const url = 'https://pokeapi.co/api/v2/type/';

export const getPokeTypes = async () => {
    try {
        const response = await fetch(url);
        const resultJson = await response.json();
        return resultJson.results;

    } catch (error) {
        console.log(error);
    }
}


