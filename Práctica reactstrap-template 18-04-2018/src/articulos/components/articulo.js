import React from 'react';

function Articulo(props){
    
    return (
        <div>
            <hr/> 
            <h2>{props.nombre}</h2>
            <h6> 

            </h6>
            <p> 
                {props.descripcion}
            </p>
        </div>
    );
}

export default Articulo;