import { useState, useEffect } from 'react'
import { getProductById } from '../list-products/ListProducts'
import ItemDetail from '../item-detalles/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer= () =>{
    const [product, setProduct] = useState (null)

    const {itemId} = useParams ()

    useEffect(()=>{
        getProductById(itemId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailConteiner'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer