/* import React, {useEffect ,useState} from 'react';


const ItemListConteiner =  () => {
    
    const [cocteles , setCocteles] = useState([]);

useEffect(() => {
    fetch('www.thecocktaildb.com/api/json/v1/1/randomselection.php')
        .then((res) => res.json())
        .then((response) => console.log(response.result));       
                
}, []);
return (
    <>
     <productosLista lista={cocteles}/>  
    </>
);
}

export default ItemListConteiner;
 */