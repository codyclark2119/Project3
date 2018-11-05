import axios from "axios";

const API = {
    signup:function(newUser){
        return axios.post("/api/signup", newUser) 
    },
    login:function(login){
        return axios.post("/api/login", {email:login.email, password:login.password})
    },
    logOut:function(){
        return axios.post("/");
    },
    getItems:function(){
        return axios.get("/api/products")
    },
    getUser:function(id){
        console.log("Getting user");
        return axios.get("/api/user" + id);
    },
    createUsers:function(data){
        console.log("Creating User");
        return axios.get("/api/users", data);
    },
    updateUser:function(data){
        console.log("Updating User");
        return axios.put("/api/users/update", data);
    },
}

export default API

