import React,{Component} from 'react'
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Redirect,Router,Route} from 'react-router-dom';

export default class FormPerfil extends Component{

constructor(props){
	  super(props)
		  this.state={
		  nombre:'',
		  correo:''
		}
    }

onChangeCorreo(e){
	 this.state={ correo: e.target.value}
}

onChangeNombre(e){
	 this.state={ nombre: e.target.value}
}

save(event){
    //Perfil guardamos la cadena completa de json
	localStorage.setItem('perfil', JSON.stringify({
	  nombre: this.state.nombre,
	  correo: this.state.correo
   }))
}

 // Cuando se va a renderizar  componenetWilMount por primera vez
 // Ya se renderizó componentDidMount

componentDidMount(){
	const storage = localStorage.getItem('perfil');

	if(storage){
          var perfil = JSON.parse(storage)

        this.setState=({
		  nombre: perfil.nombre,
		  correo: perfil.correo
		})
    }
}



    render(){
              //Si existe la sesion vamos a permitir el renderizado
             let session=sessionStorage.getItem('session')
             
              if(!session)
                  return (<Redirect to='/home' />)

		    return(
	            <Container>
	              <br/>
	              <br/>
	              <FormGroup>
	              	    <Label>Nombre</Label>
                        <Input  type="text" name="nombreUsuario" id="nombreUsuario" placeholder ="Tu nombre"
                             onChange ={this.onChangeNombre.bind(this)} value={this.state.nombre}/>
	              </FormGroup>      
	              <FormGroup>
	              	<Label> Correo</Label>
                    <Input  type="text" name="correoUsuario" id="correoUsuario" placeholder ="Tu correo"
                            onChange ={this.onChangeCorreo.bind(this)} value={this.state.correo}/>
	              </FormGroup>
	              <FormGroup>
	              	<Button onClick={this.save.bind(this)}>Guardar perfil</Button>
	              </FormGroup>
	            </Container>
	        );
	  }
}