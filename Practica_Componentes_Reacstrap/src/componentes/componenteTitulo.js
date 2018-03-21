import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Badge } from 'reactstrap';

class componenteTitulo extends React.Component {
        render() {
            return ( <div>
                <Jumbotron>
                <h1> Curso de programación </h1> 
                <p className = "lead"> Adquiere tu curso de programacion desde $10 </p> 
                </Jumbotron> 
                </div>
            );
        }
    }
    /*
    export class Servicio extends React.Component
    {
        render(){
            return(
                <div>
                    <h1>servicio</h1>
                </div>
            );
        }
    }
    */

export default componenteTitulo;