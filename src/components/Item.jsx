import React, { useContext, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { CounterContext } from "../context/CartContext.jsx";
import Swal from "sweetalert2";

/* Este componente recibe por prop los paramentros para poder visualizar las card que me trae itemlist.jsx */

function Item({ id, producto, precio, cantidad, img }) {
    function formatNumber(number) {
        return new Intl.NumberFormat().format(number);
    }

    const { setCart } = useContext(CounterContext);
    let [Agregar] = useState(1);

    const agregarAlCarrito = () => {
        setCart((agrItems) => {
            const itemAgregado = agrItems.find((items) => items.id === id);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Agregado al carrito correctamente",
                showConfirmButton: false,
                timer: 1500,
            });

            if (itemAgregado) {
                return agrItems.map((items) => {
                    if (items.id === id) {
                        return { ...items, cantidad: items.cantidad + Agregar };
                    } else {
                        return items;
                    }
                });
            } else {
                return [...agrItems, { id, cantidad: Agregar, precio, producto, img }];
            }
        });
    };

    return (
        <>
            <div className="card cardProd" key={id}>
                <img
                    src={`../assets/img_producto/${img}.jpg`}
                    className="card-img-top imgProd"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{producto}</h5>
                    <p className="card-text fw-bolder">
                        Precio ARS: ${formatNumber(precio)}
                    </p>
                    <p className="card-text fw-bolder">Stock: {cantidad}</p>
                    <hr />
                    <Link to={`/item/${id}`}>
                        <button
                            className="btn EyeVisibility"
                            title="Entrar en detalles del producto."
                        >
                            <BsFillEyeFill /> Detalle
                        </button>
                    </Link>
                    <button
                        className="btn btn-secondary"
                        onClick={() => agregarAlCarrito()}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
}

export default Item;
