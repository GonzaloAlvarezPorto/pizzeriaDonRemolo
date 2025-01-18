import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const NavBar = () => {

    const [headers, setHeaders] = useState([]);
    
    const { apiBaseUrl } = useContext(CartContext)

    useEffect(()=> {
        const getHeaders = async () => {
                const response = await fetch(`${apiBaseUrl}/headers`);  // Usar la ruta correcta
                const result = await response.json();
                setHeaders(result.headers);
        };
        getHeaders();
    },[])


    return (
        <div className='contenedor__navBar'>
            {headers.length > 0 ? (
                headers.map((header, index) => (
                    <ul key={index} className='navBar__listado'>
                        <NavLink to={header.link} className='navBar__item'>
                            {header.name}
                        </NavLink>
                    </ul>
                ))) : (<p>Nada que mostrar</p>)}
        </div>
    )
}
