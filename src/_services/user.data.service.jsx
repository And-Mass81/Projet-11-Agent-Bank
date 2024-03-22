import Axios from "./caller.service";


let getUserProfile = () => {
  return Axios.post('/user/profile') // this function complete the path from Axios function
}

let testUser = () => {
  return console.log('just testing')
}

export const userDataService = {
  getUserProfile, testUser
}