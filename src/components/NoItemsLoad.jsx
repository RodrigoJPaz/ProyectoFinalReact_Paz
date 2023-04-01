import React from 'react'
import { BsFillCartXFill } from "react-icons/bs";
import '../App.css'
import { Link } from "react-router-dom";

const NoItemsLoad = () => {
  return (
    <div className='bloqueNoItems'>
        <p>¡Ops!</p>
        <h2>
        <BsFillCartXFill />
        </h2>
        <p>¡El carrito se encuentra vacio!</p>
        <p>Vuelve al menu para poder ver nuestros productos</p>
        <Link to={"../store"}>
          <button className="buttonHome bg-warning">Ir al Store </button>
        </Link>
    </div>
  )
}

export default NoItemsLoad