import React from "react";
import freeCodeCampLogo from '../imagenes/freecCodeCampLogo.png';
import '../hojas-estilos/Logo.css'

const Logo = () => {
    return (
        <div className="freecodecamp-logo-contenedor">
          <img 
            src={freeCodeCampLogo}
            className="freecodecamp-logo"
            alt="Logo de FreeCodeCamp" />
      </div>
    );
}
export default Logo;