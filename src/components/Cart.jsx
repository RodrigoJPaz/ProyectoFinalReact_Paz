import React, { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { CounterContext } from "../context/CartContext.jsx";
import SendOrder from "./SendOrder";
import { BsFillTrashFill } from "react-icons/bs";
import NoItemsLoad from "./NoItemsLoad";

const Cart = () => {
    const { cart, removeItem, removeAll, calcularTotalCompra } =
        useContext(CounterContext);

    /* Esta funcion unicamente sirve para poder agregar un formato de numero con 00.00*/

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number);
    }

    return !cart.length ? (
        <NoItemsLoad />
    ) : (
        <>
            <div className="bloqButtonClear">
                <button className="btn btn-danger btnClear" onClick={removeAll}>
                    Vaciar carrito
                </button>
            </div>
            <div className="bloqWidget">
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="card cardWidget">
                                <img
                                    src={`../assets/img_producto/${item.img}.jpg`}
                                    className="card-img-top imgWidget"
                                    alt="..."
                                />
                                <div className="card-body text-widget">
                                    <h5 className="card-title fw-bold">{item.producto}</h5>
                                    <p className="card-text fw-bolder">
                                        Precio ARS:
                                        <span className="spanInfo">
                                            {" "}
                                            ${formatNumber(item.precio)}
                                        </span>
                                    </p>
                                    <p className="card-text fw-bolder">
                                        Cantidad seleccionada:
                                        <span className="spanInfo"> {item.cantidad}</span>
                                    </p>
                                    <p className="card-text fw-bolder">
                                        Monto parcial de la compra:
                                        <span className="spanInfo">
                                            {" "}
                                            ${formatNumber(item.precio * item.cantidad)}{" "}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="buttonEliminar"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        {/* Este componente es Unicamente un icono */}
                                        <BsFillTrashFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bloqButtonClear">
                <p className="precioTotal">
                    Total:{" "}
                    <span className="spanInfo">
                        ${formatNumber(calcularTotalCompra())}
                    </span>
                </p>
            </div>
            {/* Componete que contiene el */}
            {<SendOrder />}
        </>
    );
};

export default Cart;
