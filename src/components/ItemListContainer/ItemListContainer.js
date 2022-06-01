import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }
  
  return (
    <>
        <hr/>
        <ItemCount initial={3} stock={5} onAdd={onAdd} />

        
      </>
  );
}

export default ItemListContainer;