import './Item.css';
import React from 'react';

const Item = ({info}) => {
  return (
      <a href="" class="film">
        <img src={info.image} alt=""></img>
        <p>{info.title}</p>
    </a>
  );
}

export default Item;