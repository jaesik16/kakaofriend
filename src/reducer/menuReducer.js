import { createSlice } from "@reduxjs/toolkit";

const initState={
    isMenu:false
}
const menuReducer = createSlice({
    name:'menu',
    initialState:initState,
    reducers:{
        menu:(state,action)=>{
            state.isMenu = action.payload;
        }
    }
})

export default menuReducer.reducer;
export const { menu } = menuReducer.actions
