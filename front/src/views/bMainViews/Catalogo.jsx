import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export const Catalogo = () => {
  const [foods, setFoods] = useState([]); // Lista de alimentos
  
  const { apiBaseUrl } = useContext(CartContext)

  useEffect(() => {
    const getFoods = async () => {
      const result = await fetch(`${apiBaseUrl}/foods`)
      .then(res => res.json());
      setFoods(result.foods);
    };
    getFoods();
  }, []);

  // Agrupar los productos por categoría
  const groupedFoods = foods.reduce((acc, food) => {
    const { category } = food;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(food);
    return acc;
  }, {});

  // Crear un array de categorías ordenadas por nombre
  const categories = Object.keys(groupedFoods).sort();

  return (
    <div className='contenedor__catalogo'>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div className='catalogo'  key={index}>
            <h3 className='catalogo__categoria'>{category}</h3>
            <ul className='catalogo__listado'>
              {groupedFoods[category].map((food, prodIndex) => (
                <li className='listado__item' key={prodIndex}>
                  <p className='item__titulo'>Nombre: {food.name}</p>
                  <p className='item__precio'>Precio: ${food.price}</p>
                  <p className='item__descripcion'>Descripción: {food.description}</p>
                  <img className='item__imagen' src={food.imagen} alt={food.name}/>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};
