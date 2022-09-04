import React from 'react';
import './itemCount.css';
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
                <button className='btn' onClick={() => onAdd(count)}>Confirmar</button>
        </div>
        </>
    );
}

export default ItemCount;
