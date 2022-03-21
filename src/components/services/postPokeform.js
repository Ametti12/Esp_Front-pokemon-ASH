/**
 * Función POST para envío de datos de formulario
 */

const urlPost = 'https://jsonplaceholder.typicode.com/todos';

export const postPokeForm = async (data) => {
    const response = await fetch(urlPost, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    if (response.ok) { 
        return response.json();
    }
}
