import {React, useState, useEffect} from 'react';


    
    
    const vinos =[
        {nombre: "Las Perdices Malbec", precio : 1200, stock : 10},
        {nombre: "Rutini Cabernet", precio : 4100, stock : 25},
        {nombre: "Altos del Plata Cabernet", precio : 890, stock : 30},
        {nombre: "Punto Final Malbec", precio : 1250, stock : 16},
        {nombre: "Casa Boher Cabernet", precio : 2000, stock : 15},
        {nombre: "Terraza Reserva Cabernet", precio : 920, stock : 5},
    ];
    

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
                     <p className="card-title">${vinos.precio}</p>
                     <p className="card-text">{vinos.stock}</p>
                </div>
            </div>

    })
    setVinos(vinosJSX)

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

export default Items;
