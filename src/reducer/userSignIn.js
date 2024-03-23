import { createSlice } from "@reduxjs/toolkit";

const initState = {
    로그인정보: null
}

const userSignInReducer = createSlice({
    name:'userSignIn',
    initialState: initState,
    reducers: {
        userSignIn: (state, action)=>{
            state.로그인정보 = action.payload
        }
    }
});

export default userSignInReducer.reducer;
export const {userSignIn} = userSignInReducer.actions;