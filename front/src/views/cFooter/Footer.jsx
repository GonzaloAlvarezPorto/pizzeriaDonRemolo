import React, { useEffect, useState } from 'react'

export const Footer = () => {

  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const getSocials = async () => {
        const response = await fetch('http://localhost:8080/api/socials');
        const result = await response.json();

        setSocials(result.socials || []); // Actualiza el estado con el array de redes sociales
    };
    getSocials();
  }, []);

  return (
    <footer>
      <p>
        Conócenos en nuestras Redes
      </p>
      {socials.length > 0 ? (
        socials.map((social, index) => (
          <a key={index} className="contenedores__enlace" href={social.mediaLink} target="_blank" title={social.mediaName} rel="noopener noreferrer">
            <img className={`enlace__imagen ${social.mediaName.toLowerCase()}`} src={social.mediaImage} alt={social.mediaName} title={social.mediaName} />
          </a>
        ))
      ) : (
        <p>No tengo redes</p>
      )}
    </footer>
  );
};
