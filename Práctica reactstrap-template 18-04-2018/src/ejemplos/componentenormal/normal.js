import React, {Component} from 'react';

export default class Normal extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            val : 1
        };
    }

    shouldComponentUpdate(nextProp,nextState){
        console.log(nextState);
        console.log(this.state);
        return this.state.val === nextState.val ? false : true; 
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
                <p>{this.state.val}</p>
               
            </div>
        );
    }

}