import React, { Component } from 'react';
import ComponenteTitulo from './componenteTitulo';
import ComponenteArticulo1 from './componenteArticulo1';
import ComponenteArticulo2 from './componenteArticulo2';
import ComponenteArticulo3 from './componenteArticulo3';
import Footer from './footer';

var fecha = new Date();
const sfecha = < span > {fecha.toLocaleDateString()} </span>

var year = (new Date()).getFullYear();

class Principal extends Component {
    render() {
        return ( 
            <div>
            <ComponenteTitulo/>
             <h4><small>&nbsp;&nbsp;&nbsp;Articulos recientes</small></h4>
            <ComponenteArticulo1/>
            <ComponenteArticulo2 fecha = { sfecha }/> 
            <ComponenteArticulo3 fecha = { sfecha }/> 
            <Footer anio = { year }/> 
            </div>
        );
    }
}
export default Principal;