import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
// import { motion, useAnimation } from "framer-motion"

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })

    }

    return (
        <div
            className="checkoutProduct"

        >


            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">

                <p className="checkoutProduct__title">{title}</p>
                <small className="checkoutProduct__price">$</small>
                <strong>{price}</strong>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>

                {!hideButton && (
                    <button onClick={removeFromBasket} className=""> Remove from basket</button>
                )}
            </div>

        </div>
    )
}

export default CheckoutProduct
