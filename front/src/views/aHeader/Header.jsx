import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Activa la animación después de 1 segundo
        setTimeout(() => {
            setIsVisible(true);
        }, 1000);
    }, []);

    return (
        <div className='cabecera__contenedor'>
            <NavLink to="/" className={`contenedor__logo ${isVisible ? 'visible' : ''}`}>
                <img src='/assets/media/img/cabeceraLogo.png' />
            </NavLink>
            <NavBar />
        </div>
    )
}
