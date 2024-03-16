import axios from 'axios'

const Axios = axios.create({
    baseURL :'http://localhost:3001/api/v1'  // in case of changing API you can do it from here
})

export default Axios