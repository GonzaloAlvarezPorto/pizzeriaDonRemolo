import React from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
    return (
        <div className='cabecera__contenedor'>
            <div className='contenedor__logo'>
                <img src='/media/img/cabeceraLogo.png' />
            </div>
            <NavBar/>
        </div>
    )
}
