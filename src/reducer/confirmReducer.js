import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isConfirmModal: false,
    confirmMsg: '',
    isLogIn:false
}

const confirmReducer = createSlice({
    name: 'confirmReducer',
    initialState: initState,
    reducers : {
        confirmModal: (state, action)=>{
            state.isConfirmModal = action.payload.isConfirmModal;
            state.confirmMsg = action.payload.confirmMsg;
            state.isLogIn = action.payload.isLogIn;
        }
    }
});

export default confirmReducer.reducer;
export const {confirmModal} = confirmReducer.actions;