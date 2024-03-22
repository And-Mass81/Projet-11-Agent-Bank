import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name:"userProfile",
    initialState:{
        token: '',
        firstName: '',
        lastName: ''
    },
    reducers: {
        updateUser: (state, action) => {
            state = {
              
            };
            return state;
        } 
    }
})