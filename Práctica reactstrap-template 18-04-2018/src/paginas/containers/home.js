import React , {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import LateralContent from '../components/laterla-content';
import MainContent from '../components/main-content';
import Populares from '../../articulos/components/populares';
import Sidebar from '../../navegacion/components/sidebar';
import { Container, Button, Form, FormGroup, Label, Input, Jumbotron} from 'reactstrap';
import SERVICE from '../../constantes';

export default class Home extends Component{

    constructor(props){
        super(props);

        this.state ={
          data: {
             articulos:[]
          },
          articulosFiltrados:[]
         }
    };

   componentDidMount(){
    fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares')

    .then(result =>{
        return result.json();
     })
    .then( (json) =>{
       this.setState({data:json});

  	 this.setState({
  		  articulosFiltrados: this.state.data.articulos
  		});
    });
  }

  
    btnBuscar_Click=(event)=>{  
        if(this.state.inpBusqueda!='')
        {
			        this.setState({
                   articulosFiltrados: this.state.data.articulos
              });
			  
		       this.setState({
                 articulosFiltrados:this.state.articulosFiltrados.filter(number => (number.nombre.toUpperCase().match(this.state.inpBusqueda.toUpperCase()) || number.descripcion.toUpperCase().match(this.state.inpBusqueda.toUpperCase())))
              });
        }
        else
        {
            this.setState({
                  articulosFiltrados:this.state.data.articulos
            });
        }
    }

 
    onChangeBusqueda(e){
         this.setState({
             inpBusqueda:e.target.value
         });
		   this.setState({
            articulosFiltrados: this.state.data.articulos
          });
    }

    render(){
        return(
            <TemplateLayout>
                <LateralContent>
                  <Sidebar pagina={'home1'}/>
                </LateralContent>
                <MainContent>
                  <div class="row row-centered pos">
                    <div class="col-lg-8">
                        <Input onChange={this.onChangeBusqueda.bind(this)} type="textArea" name = "inpBusqueda" 
                         id="inpBusqueda" placeholder="Texto a Buscar?" witch="300"/>
                    </div>
                    <div class="col-lg-4">
                      <button class="btn btn-info" onClick={this.btnBuscar_Click}  name="btnBuscar">Buscar</button>
                    </div>
                  </div>
                         <Populares articulos={this.state.articulosFiltrados}/>
                        
                </MainContent> 
            </TemplateLayout>
        );
    }
}
