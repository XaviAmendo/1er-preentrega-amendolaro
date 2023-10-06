import React from 'react'
import './ItemList.css'
import Item from '../item/Item'

const ItemList=({products}) =>{
    return(
        <div className='listGroup'>
           {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList