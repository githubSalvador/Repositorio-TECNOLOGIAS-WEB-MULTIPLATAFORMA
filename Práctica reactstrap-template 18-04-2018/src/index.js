import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
/*import App from './componentes/app/app.js';
import ComponenteFuncional from './ejemplos/componentefuncional/funciona';
import Normal from './ejemplos/componentenormal/normal';
import Puro from './ejemplos/componentepuro/puro';*/


//import datos from './datos.json';

import {BrowserRouter, Route} from 'react-router-dom';

import Home from './paginas/containers/home';
import Contacto from './paginas/containers/contacto';
import  Perfil from './paginas/containers/perfil';
import  Login from './paginas/containers/login'
import  Cerrar from './paginas/containers/cerrar'
const app = document.getElementById('app');

//ReactDOM.render(<Contacto />,app);

ReactDOM.render(
	<BrowserRouter>
	  <div>
	  	  <Route exact path='/' component={Home}/>
	      <Route path ='/home'  component={Home}/>
	      <Route path ='/contacto'  component={Contacto}/>
	      <Route path ='/perfil'  component={Perfil}/>
	      <Route path ='/login'  component={Login}/>
	      <Route path ='/cerrar'  component={Cerrar}/>
	    </div>
	</BrowserRouter>, app
);

