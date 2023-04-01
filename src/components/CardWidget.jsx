import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CartContext.jsx";

/* En este componente se encuentra, el contador de los items y esta linkeado al componente cart.jsx*/
const CardWidget = () => {
  const { cart } = useContext(CounterContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  return (
    <div className="bloqueBoton">
      <Link to={"/cart"}>
        <button type="button" className="btn btn-warning btn-lg buttonCompra">
          🛒{cantidad}
        </button>
      </Link>
    </div>
  );
};

export default CardWidget;
