import React, {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import MainContent from '../components/main-content';
import LateralContent from '../components/laterla-content';
import Sidebar from '../../navegacion/components/sidebar';
import FomContacto from '../../Formularios/components/form-contacto';


class Contacto extends Component{
	constructor(props){
		super(props);
		this.state={key:0};
	}

guardarComentario =(e,correo,mensaje) =>{
	//alert(correo);
	//alert(mensaje);


  fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/comentario',{
  method: 'POST',
  headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
    },

   body: JSON.stringify({
	   id:0,
	   correo:correo,
	   mensaje:mensaje,
	})

});

	 alert('El mensaje ha sido enviado');
	 let x = Math.random();
	 alert(x);
	 this.setState({key : x});
}



	render(){

		    return(
	            <TemplateLayout>
	                <LateralContent>
	                    <Sidebar pagina={'contacto'}  />
	                </LateralContent>

	                <MainContent>
	                  <FomContacto  key={this.state.key} enviarFormulario={this.guardarComentario}/>
	                </MainContent>
	            </TemplateLayout>
	        );
	}


}

export default Contacto;