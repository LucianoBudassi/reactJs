/*  import React from 'react';
function consultarPromise(confirmacion) {
    return new Promise ((res,rej) => {
        if(confirmacion) {
            res(vinos);
        } else{
            rej("Acceso denegado");
        }

    })
    
}

   
    
const Items = () => {
   
    const [vinos, setVinos ] = useState([])

   
       
    useEffect(() => {
        consultarPromise(true)
    .then(data => {
        const vinosJSX = data.map((vinos, indice) =>{
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '20rem'}}>
                <div className="card-header">{vinos.nombre}</div>
                     <div className="card-body">
                     <p className="card-title">{vinos.precio}</p>
                     <p className="card-text">{vinos.stock}</p>
                </div>
            </div>

    })
    setVinos(vinosJSX)
    console.log(data);

})
    .catch(error => {
        console.log(error);
})
},[]);

    
    return (
        <div className='row'>
           {vinos}
        </div>
    );
}

export default Items; */

import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import productos from "./Productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const {categoria} = useParams();
  useEffect(() => {
    const getData = new Promise((res) => {
      if (categoria){
        res(productos.filter(producto => producto.categoria === categoria));
      }
      else {
        res(productos);
      }
     
    });
    getData
      .then((res) => setData(res))
      .catch((error) => console.error("ocurrio algo inesperado"));
  }, [categoria]);
  return (
    <div className="container">
      <ItemList data={data}></ItemList>
    </div>
  );
};

export default ItemListContainer;