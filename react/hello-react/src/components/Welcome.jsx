import React from "react";
import Details from "./Details";
import Project from "./Project";

export default class Welcome extends React.Component{
    // constructor(props){
    //     super(props); // for passing props to the react component class
    //     this.handleClick = this.handleClick.bind(this);
    // }

    constructor(props){
        super(props);
        this.state = { counter : 0 , message: 'Start'};
        // let user =  {
        //     id: 1,
        //     email: 'usr@gm.com',
        //     salary: 100
        // }
        this.handleDataFromDetails = this.handleDataFromDetails.bind(this);
    }
    decrement(){
        if (this.state.counter >= 0) {
            this.setState({counter : this.state.counter - 1, message : 'decrement'});
        }
    }
    increment(){
        //console.log('Say Hello ',this);
        this.setState({counter : this.state.counter + 1});
    }
    deleteItem(){
        let _state = this.state;
        delete _state.message;
        // update the state with the latest changes
        this.setState(_state);
    }
    passMe(msg){
        console.log(`Msg is ${msg}`);
        this.setState({ message : msg});
    }

    // receive info from child
    handleDataFromDetails(data){
        this.setState({ detailsData: data });
    }

    render(){
        return <>
            <p>Welcome </p>
            <button onClick={()=>this.decrement()}>-</button>
            <button onClick={()=>this.increment()}>+</button>
            <h3>Button was clicked : {this.state.counter} times</h3>
            <button onClick={()=>this.deleteItem()}>Delete Item</button>
            <button onClick={()=>this.passMe('hello')}>Pass me</button>
            {/* <Details message={this.state.message}/> */}
            { this.state.message !== 'Start'? <Details message={this.state.message} 
            // passing event handler to get info from child
            handleData={this.handleDataFromDetails} /> : ''}

            <Project/>
        </>
    }
}