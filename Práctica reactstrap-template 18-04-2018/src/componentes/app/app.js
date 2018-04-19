
import React,{Component} from 'react';
import Encabezado from './../header/header.js';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron,Container,Badge} from  'reactstrap';

class App extends Component {

    render() {
        return (
          <div>
            <Jumbotron>
                <Container>
                
                    <h1>Cursos de programación</h1>
                    <p className="lead">Aquiere tu curso de programación desde $10</p>
                </Container>
            </Jumbotron>
            <Container fluid>
                <h4><small>Articulos recientes</small></h4>

                <div className="rounded bg-secondary p-3 text-white">
                    <h2>Programación en PHP con Laravel</h2>
                    <h6> Por Hugo Gómez, Febrero 03, 2018.</h6>
                    <h6> <Badge color="warning">PHP</Badge><Badge color="info">Web</Badge> </h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Beatae quis placeat dolor ex esse blanditiis modi delectus 
                         tempore deserunt? Ducimus at dolor necessitatibus molestias 
                         dolores cumque quis quo facere fugiat!
                    </p>
                </div>

                <hr/>
                <h2>Programación en Asp.net</h2>
                <h6> Por Hugo Gómez, Febrero 03, 2018.</h6>
                <h6> <Badge color="primary">C#</Badge> <Badge color="info">Web</Badge> </h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Beatae quis placeat dolor ex esse blanditiis modi
                     delectus tempore deserunt? 
                     Ducimus at dolor necessitatibus molestias dolores cumque quis quo facere fugiat!
                </p>

                <hr/>
                <h2>Arduino y el IOT</h2>
                <h6> Por Hugo Gómez, Febrero 03, 2018.</h6>
                <h6> <Badge color="success">Arduino</Badge> <Badge color="danger">IOT</Badge> </h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Beatae quis placeat dolor ex esse blanditiis modi
                     delectus tempore deserunt? 
                     Ducimus at dolor necessitatibus molestias dolores cumque quis quo facere fugiat!
                </p>
      
            </Container>

            <Container fluid className="bg-secondary p-1 text-white">
                <p>Hugo Gómez Arenas 2017</p>
            </Container>
          </div>
        );
      }
}

export default App;
