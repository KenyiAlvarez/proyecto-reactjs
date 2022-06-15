import "./ItemDetail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";


export const ItemDetail = ({ item }) => {


    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
         console.log(itemToCart)
    }


    return (
        <div className="itemDetail container my-5">

            <img className="imgDetail" alt={item.nombre} src={item.img} />

            <div className="dataPrd">

                <h2>{item.nombre}</h2>
                <p className="itemDescrip">{item.descrip}</p>

                <div className="precioItem">
                    <strong className="prodcPrecio">€{item.precio}</strong>
                </div>

                <hr />

                <ItemCounter
                    max={item.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    handleAgregar={handleAgregar}
                />


                <br />
                <button className="btn btn-dark" onClick={handleVolver}>VOLVER</button>

            </div>
        </div>
    );
}

export default ItemDetail