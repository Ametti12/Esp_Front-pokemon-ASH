/**
 * Función de petición GET para Especies Pokemon a la API
 */


export const getSpecies = async (offset) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=20`)
        const responseJson = await response.json()
        
        return responseJson;
    }
    catch (error) {
        console.log(error.message)
    }

}