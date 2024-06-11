import React from "react";

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            textInput : "",
        }
    }
    captureText = (e) => {
        this.setState({textInput: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
    }    
    render(){
        return (
            <>
            <h1>{this.state.textInput}</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.textInput} onChange={this.captureText}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            </>
        )
    }
}

export default Form;