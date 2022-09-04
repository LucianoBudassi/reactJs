import React from 'react';
import ItemCount from './itemCount';
const Count = () => {
    function onAdd (count){
        console.log(`Se han seleccionado ${count} productos`);
    }
    return (
        <>
          <ItemCount stock={10} onAdd={onAdd}/>  
        </>
    );
}

export default Count;
