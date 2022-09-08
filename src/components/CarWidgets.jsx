import React from 'react';
import {BsCart4} from "react-icons/bs"
import Button from "react-bootstrap/Button";

const CartWidget = () => {
    return (
      <div>
        <Button variant="dark">
          <BsCart4 />
        </Button>
      </div>
    );
  };
  
  export default CartWidget;
