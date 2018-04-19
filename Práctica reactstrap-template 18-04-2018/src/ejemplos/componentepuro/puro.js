import React, {PureComponent} from 'react';


export default class Puro extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {
            val : 1
        };
    }

    componentDidMount()
    {
        setInterval(() =>{
            this.setState(()=>{
                return { val : 1};
            });
        },2000);
    }

     render(){
        console.log('Llamada al render ');

        return(
            <div>
                COMPONENTE PURO 
                <p>{this.state.val}</p>
               
            </div>
        );
    }
    
}