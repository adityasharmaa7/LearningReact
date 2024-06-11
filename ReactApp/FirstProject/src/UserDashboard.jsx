import React from "react";

class UserDashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            email : "",
            name : "",
            img : "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
        }
    }
    getData = async(id) =>{
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await response.json();
        this.setState(()=>({email: data.data.email}));
        this.setState(()=>({name: data.data.first_name + " " + data.data.last_name}));
        this.setState(()=>({img: data.data.avatar}));
        return data;
    }
    showAlert = () =>{
        alert("Failed to fetch data!")
    }
    render(){
        return(
            <>
            <button onClick={() => this.getData(1)}>1</button>
            <button onClick={() => this.getData(2)}>2</button>
            <button onClick={() => this.getData(3)}>3</button>
            <button onClick={this.showAlert}>100</button>
            <ul>
                <li>Email :{this.state.email}</li>
                <li>Name :{this.state.name}</li>
            </ul>
            <img src={this.state.img} alt="" />
            </>
        )
    }
}

export default UserDashboard;