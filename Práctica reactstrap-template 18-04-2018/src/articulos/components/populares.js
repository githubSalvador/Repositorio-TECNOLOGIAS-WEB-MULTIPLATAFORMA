import React from 'react';
import Articulo from './articulo';

function Populares(props)
{

    if(props.articulos.length >0){
                      return(
                    <div>
                        <h4><small>Articulos más pupulares</small></h4>
                        {
                            props.articulos.map((item) => {
                                return <Articulo {...item} key={item.id} /> 
                            })
                        }
                    </div>
                );
            }else{
                return  <p className="tect-center"> Cargando los más populares...</p>
            }
}

export default Populares;
