import React from 'react'
import "./Style.css"

//export default function Card() {
//  return (
//   <div>Card</div>
// )
//}
//const Card = ({titulo}) => {
    export default function Card ({titulo, imagen, marca, precio, categoria}) {

return (


        <div className='cards-container'>

            <h2>{titulo}</h2>
            <p>{imagen}</p>
            <p>{marca}</p>
            <p>{precio}</p>
            <p>{categoria}</p>

        </div>


    )
}

//export default