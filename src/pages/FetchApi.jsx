import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FetchApi() {

    const parametros = useParams();
    console.log(parametros.name.toLocaleLowerCase());

    const [nombre, setNombre] = useState('');

    const consultarApi = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${parametros.name.toLocaleLowerCase()}/`, {
            method : 'GET'
        }).then(response => {
            if (!response.ok) {
                throw new Error('Error al consultar la API');
            }
            return response.json()
        }).then(data => {
            console.log(data);
            console.log(data.forms[0].name);
            setNombre(data.forms[0].name);
        })
        .catch(error => console.error(error));
    }

    useEffect(()=> {
        consultarApi();
    }, []);

  return (
    <div>
        <h1>{ nombre }</h1>
    </div>
  )
}

export default FetchApi