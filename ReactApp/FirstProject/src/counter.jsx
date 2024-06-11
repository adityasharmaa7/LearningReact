import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    handleIncriment = () => {
        // first way bu call back 
        this.setState((prev,prevProps) => ({count : prev.count + prevProps.diff}));
        // second way 
        // this.setState({count : this.state.count + 1})
    }
    handleDecriment = () => {
        this.setState((prev,prevProps) => ({count : prev.count - prevProps.diff}));
        // this.setState((prev) => ({count : prev.count - 1}));
        // this.setState({count : this.state.count - 1})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleIncriment}>+{this.props.diff}</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecriment}>-{this.props.diff}</button>
            </div>
        );
    }
}
export default Counter;