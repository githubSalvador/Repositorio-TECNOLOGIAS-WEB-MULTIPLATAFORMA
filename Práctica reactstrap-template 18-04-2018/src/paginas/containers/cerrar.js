import React, {Component} from 'react';
import {Redirect,Router,Route} from 'react-router-dom';

export default class Cerrar extends Component{

    constructor(props){
	  super(props)
    }


	 render(){
          sessionStorage.clear()
          return (<Redirect to='/home' />)
	  }


}