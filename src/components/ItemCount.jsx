/* import React from 'react';
import { useState } from 'react';
const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    function add (){
        if(count < stock)
        setCount(count + 1)
    }

    function substract (){
        if(count > 0)
        setCount(count - 1)
    }

    function reset (){
        setCount(0)
    }
    return (
        <>
        <div className='counter-box'>
            <h1>Fernet Branca {count} </h1>
            
            <p>Stock: {stock} </p>
            <p>Cantidad: {count} </p>
        </div>

        <div className='btn'>
                <button className='btn btn-primary' onClick={add}>+</button>
                <button className='btn btn-reset' onClick={reset}>reset</button>
                <button className='btn btn-secunday' onClick={substract}>-</button>
        </div>
        <div>
                <button className='btn-confirm' onClick={() => onAdd(count)}>Confirmar</button>
        </div>
        </>
    );
}

export default ItemCount;
*/

import { React, useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, onAdd }) => {
  const [cont, setCont] = useState(0);

  function substract() {
    if (cont < stock) {
      setCont(cont + 1);
    }
  }

  function add() {
    if (cont > 0) {
      setCont(cont - 1);
    } else {
      setCont(0);
    }
  }

  return (
    <div>
      <div>
        <Button onClick={substract}>-</Button> {cont}
        <Button onClick={add}>+</Button>
      </div>
      <div>
        <Button onClick={() => onAdd(cont)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;
