import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, producto, marca, precio, categoria, img, stock})=>{
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>{producto}</h2>
            </header>
            <picture>
                <img className='itemImg' src={img} alt={producto}/>
            </picture>
            <section>
                <p className='info'>Marca:{marca}</p>
                <p className='info'>Precio:{precio}</p>
                <p className='info'>Stock:{stock}</p>
                <p className='info'>categoria:{categoria}</p>
            </section>
            <footer className='itemFooter'>
                <Link to={`/item/${id}`} className='option'>Detalles</Link>
            </footer>
        </article>
    )
}

export default Item