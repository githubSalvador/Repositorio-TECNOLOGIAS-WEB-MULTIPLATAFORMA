import React, {Component} from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Jumbotron} from 'reactstrap';

export default class FormContacto extends Component{
	constructor(props){

		super(props);

		this.state={
			id:0,
			correo:'',
			mensaje:''
		};
	}
	
	onChangeCorreo(e){
		
         this.setState({
             correo:e.target.value
         });
     }


	onChangeMensaje(e){
         this.setState({
     	   mensaje:e.target.value
          });
    }


   render(){
        return(
            <Container>
                <Jumbotron>
                    <h1 className="display-3">Dejanos tu mensaje  </h1>
                     <p className="lead">No lo dudes!! dejanos tu mensaje  </p>

			    </Jumbotron>
					<FormGroup>
					     <Label >Correo Electrónico  </Label>
					     <Input  onChange={this.onChangeCorreo.bind(this)}  type="email" name = "email" id="email" placeholder="tucorreo@dominio.com"/>
					</FormGroup>
				    <FormGroup>
					     <Label >Mensaje  </Label>
					     <Input  onChange={this.onChangeMensaje.bind(this)} type="textarea" name = "mensaje" id="mensaje" placeholder="Tu mensaje"/>
					</FormGroup>
                    <FormGroup className ="d-flex justify-content-end">
					     <Button color="primary" onClick={(e)=>{this.props.enviarFormulario(e,this.state.correo, this.state.mensaje)}}> Enviar Mensaje </Button>
					</FormGroup> 
            </Container> );
    }
}

 