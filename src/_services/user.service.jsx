import Axios from "./caller.service"

let login = (formData)=>{
 return Axios.post('/user/login',formData ) // i send my promises here with the rest of the path of the API
}

let saveToken = (token) =>{
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged =() =>{
    let token = localStorage.getItem('token')
    return !!token // if there is something in localStorage = true
}

let getToken =() =>{
    return localStorage.getItem('token')
}

export const userService ={
    login, saveToken, logout , isLogged ,getToken
}