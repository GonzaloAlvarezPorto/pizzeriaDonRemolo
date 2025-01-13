import React, { useEffect, useState } from 'react';

export const Historia = () => {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        // Hacer la solicitud a la API para obtener los datos
        const getOrderedHistories = async () => {
            const response = await fetch('http://localhost:8080/api/histories');
            const data = await response.json();

            if (data && Array.isArray(data.histories)) {
                // Ordenamos el array de historias por el campo 'order'
                const sortedHistories = data.histories.sort((a, b) => a.order - b.order);
                setHistories(sortedHistories);
            } else {
                console.log('La estructura de los datos no es la esperada.');
                setHistories([]);
            }
        };

        getOrderedHistories();
    }, []);

    return (
        <>
            {histories.length > 0 ? (
                histories.map((history, index) => (
                    <div className='historia' key={index} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                        <p className={`historia__parrafo ${!history.image ? 'full-width' : ''}`}>
                            {history.paragraph}
                        </p>
                        {history.image && (
                            <div className='historia__imageContenedor'>
                                <img className='historia__image' src={history.image} alt="Historia" />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No hay nada que mostrar</p>
            )}
        </>
    );
}
