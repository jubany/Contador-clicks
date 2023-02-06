import React from "react";
import '../components/Button.css';

function button({texto,buttonClick,manejarClick}) {//se usa {}, xq estamos haciendo desestruturación
    return(
        <button className={buttonClick ?'button-click':'button-restart'}//operador ternario,se divide en 3,la primera recibe el argumento, despues del? dice si es verdadero : sino, es hace esto en falso
        onClick={manejarClick}>
         {texto}
        </button>
    )
}


export default button;