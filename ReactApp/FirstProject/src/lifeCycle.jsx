import React from "react";

class LifeCycle extends React.Component {
    constructor(){
        super()
        this.state = {
            counter : 0,
        }
    }
    handleFetchData = async() => {
        const response = await fetch("https://reqres.in/api/users/1");
        const data = await response.json();
        console.log(data.data.email);
    }
    componentDidMount(){
        console.log("Mounting Stage");
        this.handleFetchData();
    }
    componentDidUpdate(prevState,prevProps){
        console.log("Counter = ", this.state.counter,"prevProps = ",prevProps,"prevState = ", prevState
        );
    }
    componentWillUnmount(){
        console.log("Unmounting Stage")
    }
    handleIncriment = () => {
        this.setState((prevState)=>({counter: prevState.counter + 1}))
    }
    handleDecriment = () => {
        this.setState((prevState)=>({counter: prevState.counter - 1}))
    }
    render(){
        return (
            <>
            <button onClick={this.handleIncriment}>+</button>
            <span>{this.state.counter}</span>
            <button onClick={this.handleDecriment}>-</button>
            </>
        )
    }
}

export default LifeCycle;