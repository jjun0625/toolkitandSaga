
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {postStateType} from './types'

const postInitialState:postStateType = {
    data:[],
    value:null,
    postData:null,
    isLoadingPost : false,
    hasPostError : false,
    error:''
}

const postSlice = createSlice({
    name:'post',
    initialState:postInitialState,
    reducers:{
       getData(state)  {
        state.isLoadingPost = true
       },
       getDataSuccess(state,action){
        state.isLoadingPost = false
        state.data = action.payload
        state.hasPostError = false 
       },
       getDataFailure(state){
        state.isLoadingPost = false
        state.hasPostError = true 
       },
       postData(state,action){
           state.isLoadingPost = true
       },
       postDataSuccess(state,action){
        state.isLoadingPost = false
        state.postData = action.payload
        state.hasPostError = false 
       },
       postDataFailure(state){
        state.isLoadingPost = false
        state.hasPostError = true 
       }
    },
    
})
export const {getData,getDataSuccess,getDataFailure,postData,postDataSuccess,postDataFailure} = postSlice.actions
export default postSlice