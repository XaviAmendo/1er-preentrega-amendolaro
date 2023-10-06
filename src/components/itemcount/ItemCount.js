//import React from 'react'
import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity +1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className='counter'>
            <div className='controls'>
                <button className='boton-contador' onClick={decrement}>-</button>
                <h4 className='numero-contador'>{quantity}</h4>
                <button className='boton-contador' onClick={increment}>+</button>
            </div>
            <div>
                <button className='boton-contador' onClick={() => onAdd(quantity)} disabled={!stock}>agregar al carrito</button>
            </div>

        </div>
    )

}

export default ItemCount