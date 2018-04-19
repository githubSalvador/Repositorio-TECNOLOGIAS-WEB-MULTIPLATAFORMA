import React, {Component} from 'react';
import {Redirect,Router,Route} from 'react-router-dom';

export default class Login extends Component{

    constructor(props){
	  super(props)
    }


	 render(){
          sessionStorage.setItem('session', 1414) //Valor Cualquiera para id.
          return (<Redirect to='/perfil' />)
	  }
}