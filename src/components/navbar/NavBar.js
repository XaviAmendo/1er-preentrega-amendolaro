import React from 'react'
import "./Style.css"
import Boton from '../botonnav/Boton'
import CartWidget from '../widget/CartWidget'
import { Link } from 'react-router-dom'



const NavBar=()=>{
return(
<div className={"containerNav"}>
  <Link to={"/"}>Inicio</Link>
  <Boton name={"Productos"}/>
  <Boton name={"Contacto"}/>
  <CartWidget/>

</div>

)

}

export default NavBar