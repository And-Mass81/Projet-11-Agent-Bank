import axios from 'axios'
import {userService} from './user.service'

const Axios = axios.create({
    baseURL :'http://localhost:3001/api/v1'  // in case of changing API you can do it from here
})
/** interceptor for token */
Axios.interceptors.request.use(request =>{
    if(userService.isLogged()){
        request.headers.Authorization = 'Bearer '+ userService.getToken()
    }
    return request
})

export default Axios