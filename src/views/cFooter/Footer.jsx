import React from 'react'
import dataRedes from '../../data/redes.json'

export const Footer = () => {

  const redes = dataRedes;

  return (
    <footer>
      <p>
        Conocenos en nuestras Redes
      </p>
      {redes.length > 0 ? (
        redes.map((red, index) => (
          <a key={index} className="contenedores__enlace" href={red.enlaceRed} target="_blank" title={red.nombreRed}>
            <img className={`enlace__imagen ${red.nombreRed.toLocaleLowerCase()}`} src={red.imagenRed} alt={red.nombreRed} title={red.nombreRed} />
          </a>
        ))

      ) : (<p>No tengo redes</p>)}

    </footer>
  )
}
