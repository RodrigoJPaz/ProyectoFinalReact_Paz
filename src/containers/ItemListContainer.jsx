import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import "../App.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../components/Loading";

/* Componente más importante donde pasa toda la logica para el resto de los componentes, tambien tiene la conection de FireBase donde se encuentra todo los productos */

const ItemListContainer = ({ greeting }) => {

    const { categoryid } = useParams();
    const [loading, setLoading] = useState(true);
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        setLoading(true);

        /* Conection a la base de dato */

        const db = getFirestore();
        const itemsCollection = categoryid ? query(collection(db, "Productos"), where("category", "==", categoryid)) : collection(db, "Productos");
        getDocs(itemsCollection)
            .then((snapshot) => {
                setListaProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryid]);

    return (
        <>
            <h1 className="TituloPrincipal titulo">{greeting}</h1>
            {/* Logica para utilizar el componente del Loading(snipper) o itemList */}
            {loading ? <Loading /> : <ItemList product={listaProductos} />}
        </>
    );
}

export default ItemListContainer;
