import axios from "axios";

const API = {
    isLoggedIn:function(){
        return axios.get("/api/auth")
    },
    signup:function(newUser){
        return axios.post("/api/signup", newUser) 
    },
    login:function(login){
        return axios.post("/api/login", {username:login.username, password:login.password})
    },
    logout:function(){
        return axios.post("/api/logout");
    },
    getUser:function(id){
        console.log("Getting user");
        return axios.get("/api/user/" + id);
    },
    getUserSession:function(id){
        console.log("Getting user session");
        return axios.get("/api/user/");
    },
    createUsers:function(data){
        console.log("Creating User");
        return axios.get("/api/users", data);
    },
    updateUser:function(data){
        console.log("Updating User");
        return axios.put("/api/users/update", data);
    },
    getItems:function(){
        console.log("Getting product List");
        return axios.get("/api/products");
    }
}

export default API

