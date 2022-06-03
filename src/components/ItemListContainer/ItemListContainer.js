import React, { useEffect, useState } from 'react';

import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const films = [
  {
    id: 1,
    image: './imgPF.jfif',
    title: 'lenovo'
  },
  {
    id: 2,
    image: './imgPF.jfif',
    title: 'macbook'
  },
  {
    id: 3,
    image: './imgPF.jfif',
    title: 'hp'
  },

];





const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });
    getData.then(res => setData(res));

  }, [])

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }

  return (
    <>
      <hr />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />

    </>
  );
}

export default ItemListContainer;