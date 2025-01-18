import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    const [headers, setHeaders] = useState([]);

    useEffect(()=> {
        const getHeaders = async () => {
                const response = await fetch(import.meta.env.VITE_MONGO_URI);
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
