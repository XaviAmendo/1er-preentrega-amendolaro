import React from 'react'
import "./Style.css"
import Boton from '../botonnav/Boton'
import CartWidget from '../widget/CartWidget'



const NavBar=()=>{
return(
<div className={"containerNav"}>
  <Boton name={"Inicio"}/>
  <Boton name={"Productos"}/>
  <Boton name={"Contacto"}/>
  <CartWidget/>

</div>

)

}

export default NavBar