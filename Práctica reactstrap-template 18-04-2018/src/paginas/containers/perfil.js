import React, {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import MainContent from '../components/main-content';
import LateralContent from '../components/laterla-content';
import Sidebar from '../../navegacion/components/sidebar';
import {Redirect,Router,Route} from 'react-router-dom';
import FormPerfil from '../../Formularios/components/form-perfil';

export default class Perfil extends Component{
	constructor(props){
	  super(props)
    }

	render(){

		    return(
	            <TemplateLayout>
	                <LateralContent>
	                    <Sidebar pagina={'perfil'}  />
	                </LateralContent>

	                <MainContent>
	                   <FormPerfil/> 
	                </MainContent>
	            </TemplateLayout>
	        );
	  }


}