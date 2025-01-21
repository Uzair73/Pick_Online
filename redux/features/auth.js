const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    access_token: typeof window !== "undefined" ? sessionStorage.getItem("access_token") || '' : '',
    refresh_token: typeof window !== "undefined" ? sessionStorage.getItem("refresh_token") || '' : '',
  };

const authSlice = createSlice({
    name: 'auth_token',
    initialState,
    reducers: {
        setAuth_Token: (state,action) =>{
            state.access_token = action.payload;
            state.refresh_token = action.payload;
            sessionStorage.setItem('access_token', action.payload)
            sessionStorage.setItem('refresh_token', action.payload)
            console.log("Access Token set in sessionStorage:", sessionStorage.getItem('access_token'));
            console.log("Refresh Token set in sessionStorage:", sessionStorage.getItem('refresh_token'));
        },
        clear_token: (state, action) =>{
            state.access_token = '';
            state.refresh_token = '';
            sessionStorage.removeItem('access_token')
            sessionStorage.removeItem('refresh_token')
        }
    },
})

export const {setAuth_Token, clear_token} = authSlice.actions
export default authSlice.reducer