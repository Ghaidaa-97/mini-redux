import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:{email:"ghaidaaobeidat2@gmail.com" , password:"ghaidaa" , isLogged:false},
    reducers:{
        login:(state , action)=>{
            
            if(action.payload.email === state.email &&action.payload.password == state.password){
                state.isLogged = true
            }else{
                window.alert("Uncorrect login info");

                
            }
        },
        logout:(state)=>{
            state.isLogged = false;
        }
    }
});
export const {login , logout} = userSlice.actions;
export default userSlice.reducer;