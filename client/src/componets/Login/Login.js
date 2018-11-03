import React, {Component} from "react";
import API from "../../API/API.js";

export default class Login extends Component {
    state = {
        username:"",
        password:""
    }

    handleSignUp = (event) => {
        event.preventDefault();
        console.log("I'm signing up baby", this.state);
        API.login(this.state).then(function(response){
            console.log(response);
        })
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div className="container-fluid">
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        name="email" 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        onChange={this.captureInput} 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                        onChange={this.captureInput} 
                    />
                </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        onClick={this.handleLogin}>Submit
                    </button>
            </form>
        </div>
        )
    }
}