import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron,Container,Badge} from 'reactstrap';

class Footer extends React.Component
{
    render(){
        return(
            <div>
                <Container fluid>
                        <div id="divfooter" className='bg-secondary p-3 text-white text-center'>
                                <p>SALVADOR HERNÁNDEZ RAMÍREZ  <span>{this.props.anio}</span></p>
                        </div>
                </Container>
            </div>
        );
    }
}
export default Footer;