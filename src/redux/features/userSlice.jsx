
import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: {
       signupUsers : [],
        loginUser: {},
       error:null
    },
    reducers: {
        setLogin: (state,action) => {
            state.loginUser=action.payload
        },
        setSignupUser: (state,action) => {
            state.signupUsers.push(action.payload)
            state.loginUser=action.payload
        },
        setLogoutUser: (state) => {
            state.loginUser=""
        }
    }
})
export default userSlice.reducer
export const { setLogin, setSignupUser, setLogoutUser } = userSlice.actions
