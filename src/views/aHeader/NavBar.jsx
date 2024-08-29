import React from 'react'
import encabezados from '../../data/encabezado.json';

export const NavBar = () => {

    const titulos = encabezados;
    return (
        <div className='contenedor__navBar'>
            {titulos.length > 0 ? (
                titulos.map((titulo, index) => (
                    <ul key={index} className='navBar__listado'>
                        <button className='navBar__item'>
                            {titulo.nombre}
                        </button>
                    </ul>
                ))) : (<p>Nada que mostrar</p>)}
        </div>
    )
}
