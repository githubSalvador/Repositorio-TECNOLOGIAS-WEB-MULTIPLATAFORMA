
import React from 'react';

function ComponenteFuncional(props)
{
    return(
        <div>
            <h3>{props.titulo}</h3>
            <p>{props.contenido}</p>
            <button onClick={props.evento} >Aceptar</button>
        </div>
    );
}

export default ComponenteFuncional;
