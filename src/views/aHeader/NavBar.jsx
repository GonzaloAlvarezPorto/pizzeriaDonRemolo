import React from 'react'
import encabezados from '../../data/encabezado.json';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    const titulos = encabezados;
    return (
        <div className='contenedor__navBar'>
            {titulos.length > 0 ? (
                titulos.map((titulo, index) => (
                    <ul key={index} className='navBar__listado'>
                        <NavLink to={titulo.link} className='navBar__item'>
                            {titulo.nombre}
                        </NavLink>
                    </ul>
                ))) : (<p>Nada que mostrar</p>)}
        </div>
    )
}
