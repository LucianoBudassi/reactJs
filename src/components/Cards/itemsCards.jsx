import React from 'react';
import './itemsCards.css';

const ItemsCards = () => {
    return (
        
      <div>
  <div className="container">
    <h4>Carrito de compras</h4>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acción</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items" />
      <tfoot>
        <tr id="footer">
          <th scope="row" colSpan={5}>Carrito vacío - comience a comprar!</th>
        </tr>
      </tfoot>
    </table>
    
    <div className="row" id="cards"></div>
  </div>
 
  {/*  <div id="template-footer">
  <th scope="row" colspan="2">Total productos</th>
        <td>10</td>
        <td>
            <button className="btn btn-danger btn-sm" id="vaciar-carrito">
                vaciar todo
            </button>
        </td>
        <td className="font-weight-bold">$ <span>260</span></td>
    </div>
  <div id="template-carrito">
  <tr>
        <th scope="row">id</th>
        <td>Fernet</td>
        <td>1</td>
        <td>
            <button className="btn btn-info btn-sm">
                +
            </button>
            <button className="btn btn-danger btn-sm">
                -
            </button>
        </td>
        <td>$ <span>1200</span></td>
      </tr>
    </div>  

  <div id="template-card">
  <div className="col-12 mb-2 col-md-4">
          <div className="card">
            <img src= "" alt="" class="imagen-card"/>
            
            <div className="card-body">
              <h5>Titulo</h5>
              <p>precio</p>
              <button className="btn btn-dark">Comprar</button>
            </div>
          </div>
        </div>
      </div>*/}

        </div>
    );
}

export default ItemsCards;
