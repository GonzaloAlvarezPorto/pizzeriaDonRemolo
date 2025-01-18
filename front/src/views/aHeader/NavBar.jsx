import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    const [headers, setHeaders] = useState([]);
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(()=> {
        const getHeaders = async () => {
                const response = await fetch(`${apiBaseUrl/api/headers}`);
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
