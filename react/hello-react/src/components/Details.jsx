import React from "react";

export default class Details extends React.Component{
    constructor(props){
        super(props);
        this.handleDataToWelcome= this.handleDataToWelcome.bind(this);
    }
    render(){
        return  <>
            <h3>Details : {this.props.message}</h3>
            <button onClick={this.handleDataToWelcome}>Send Data</button>
            </>

    }

    handleDataToWelcome(){
        const data = {
            message: 'Received',
            trigger : true
        };
        console.log('handle data ');
        // send info to parent 
        this.props.handleData(data); 
    }
}