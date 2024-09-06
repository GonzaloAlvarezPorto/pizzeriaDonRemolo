import React from 'react';
import dataHistoria from '../../data/historia.json';

export const Historia = () => {

    // Asegúrate de acceder al array de "historia" dentro del JSON
    const historias = dataHistoria.historia;

    return (

        <>
            {historias.length > 0 ? (
                historias.map((historia, index) => (
                    <p key={index}>
                        {historia.parrafo}
                    </p>
                ))
            ) : (<p>No hay nada que mostrar</p>)}
        </>

    )
}
