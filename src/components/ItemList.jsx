import React from 'react'
import Item from './Item'
import "../App.css"

/* El componente ItemList lo que hace es listar visualmente cada uno de los productos recibiendo como prop a produc para poder hacer la logica */

const ItemList = ({ product }) => {

    return (
        <div className='BloqueProd'>
            {
                product.map((prod) => {
                    return (
                        <div key={prod.id} className="listProd">
                            {/* Le manda al componente Item la prop*/}
                            <Item
                                id={prod.id}
                                producto={prod.producto}
                                precio={prod.precio}
                                cantidad={prod.cantidad}
                                descripcion={prod.descripcion}
                                img={prod.img}
                                category={prod.category} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(ItemList)