import React from 'react'
import img1 from '../Imagenes/bread.jpg';
import '../styles/MyStyles.css'

export const AboutComponent = () => {
  var username = localStorage.getItem("username").replace('"', '').replace('"', '');

  return (
    <div>
        <section class="about"> 
            <div class="img">
                <img src={img1}></img>
            </div>
            <div class="content">
                <span>¡Bienvenido {username}!</span>
                <h3>¿Quiénes somos?</h3>
                <p>Somos Rincón Dulce, una pastelería familiar fundada el 2002 con el objetivo de llevar dulces de calidad a la mayor cantidad de clientes posibles,
                buscando no solo destacar con esto, si no también a un gran servicio orientado en la cercanía con los usuarios. Tenemos una gran variedad de productos,
                respecto a los dulces, estos van desde dulces chilenos hasta dulces de otras culturas, y no solo eso, ya que de a poco se han ido incorporando productos
                salados de todo tipo, como empanadas. Los invitamos a echar un ojo por la página y encantarse con nuestros ricos postres!</p>
            </div>
        </section>
    </div>
  )
}

export default AboutComponent;