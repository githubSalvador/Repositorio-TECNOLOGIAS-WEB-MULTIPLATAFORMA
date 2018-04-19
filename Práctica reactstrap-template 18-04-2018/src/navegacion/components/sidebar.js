import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem} from 'reactstrap';
import {Redirect,Router,Route} from 'react-router-dom';

class Sidebar extends Component {
	constructor (props){
		super(props);
		 

	}

activeLink =(pagina)=>{
	return "nav-link " + ((this.props.pagina)== pagina? 'active ': '');
}

   render(){

                //Si existe la sesion vamos a permitir el renderizado
                 let session=sessionStorage.getItem('session')
             
                  var navPerfil = 
                     <NavItem>
                     	 <Link className={this.activeLink('perfil')} to='/perfil'> Perfil </Link>
                  	 </NavItem>
        
                   var navCerrar= 
                     <NavItem>
                     	 <Link className={this.activeLink('cerrar')} to='/cerrar'> Cerrar </Link>
                  	 </NavItem>
                  var navLogin= 
                     <NavItem>
                     	 <Link className={this.activeLink('login')} to='/login'> Login </Link>
                  	 </NavItem>

        return(
            <div>
                <Nav vertical pills>
                    <h4>Tu blog </h4>
					<NavItem>
					   <Link className= {this.activeLink('home')} to ='/home'> Home </Link>  
					</NavItem>
					<NavItem>		    
					    <Link className={this.activeLink('contacto')} to ='/contacto'> Contacto </Link>
					</NavItem>
				
		            {(!session)? navLogin:''}
					{session >0 ? navPerfil:''}
					{session >0 ? navCerrar:''}
                 </Nav>
            </div>
        );
    }
}

export default Sidebar;