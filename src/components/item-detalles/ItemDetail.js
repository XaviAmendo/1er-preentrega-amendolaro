import React from 'react'
import ItemCount from '../itemcount/ItemCount'

const ItemDetail = ({id, producto, marca, precio, categoria, img, stock})=>{
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>{producto}</h2>
            </header>
            <picture>
                <img src={img} alt={producto} className='itemImg'/>
            
            </picture>
            <section>
                <p className='info'>Marca:{marca}</p>
                <p className='info'>Precio:{precio}</p>
                <p className='info'>Stock:{stock}</p>
                <p className='info'>categoria:{categoria}</p>
            </section>
            <footer className='itemFooter'>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('hola')}/> 
            </footer>
        </article>
    )
}

export default ItemDetail