import React, { useState, useEffect } from 'react';

export const Main = () => {
  const [foods, setFoods] = useState([]); // Lista de alimentos
  const [activeIndex, setActiveIndex] = useState(0); // Índice del ítem activo
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getFoods = async () => {
      const result = await fetch('/api/foods').then(res => res.json());
      const filteredFoods = result.foods.filter(food => food.novedad === true); // Filtrar novedades
      setFoods(filteredFoods);
    };
    getFoods();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % foods.length); // Cambiar al siguiente ítem
    }, 3000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [foods]);

  return (
    <div className='contenedor__main'>
      {
        foods.length > 0 ? (
          <div className='main__apartado'>
          {foods.map((food, index) => (
            <div className='apartado__carrusel' key={index}>
              <div className={`carrusel__item ${index === activeIndex ? 'active' : ''}`} style={{ display: index === activeIndex ? 'flex' : 'none' }}>
                <p className='carrusel__titulo'>{food.name}</p>
                <div className='carrusel__otraInfo'>
                  <p className='carrusel__descripcion'>{food.description}</p>
                  <p className='carrusel__precio'>${food.price}</p>
                </div>
                <div className='carrusel__imagenContenedor'>
                  <img className='carrusel__imagen' src={food.imagen} alt={food.name} />
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron alimentos.</p>
        )
      }
    </div>
  );
};
