import {getData,getDataSuccess,getDataFailure,postData,postDataSuccess,postDataFailure} from './post'
import {call,put,all,fork,takeLatest} from "@redux-saga/core/effects"
import {postType,postValueType,ItweetPostType} from './types'
import { AxiosResponse } from "axios";


import axios from "axios"

const API = 'http://localhost:8080'
const addPostAPI = ():Promise<AxiosResponse<postType[]>> => {
    return axios.get(`${API}/tweets/`)
}
export function* addPost():Generator<any>{
try{
    const result = yield call(addPostAPI)
    yield put(getDataSuccess(result))
}catch(e){
    console.error(e)
    yield put(getDataFailure())
}
}

const postValueAPI = (data:postValueType):Promise<AxiosResponse<ItweetPostType>> => {
    return axios.post(`${API}/tweets/`,data)
}

export function* postValue({payload}:{payload:postValueType}):Generator<any>{
    try{
        const result = yield call(postValueAPI, payload)
        yield put(postDataSuccess(result))
    }catch(e){
        console.error(e)
        yield put(postDataFailure())
    }
}


function* watchAddPost() {
    yield takeLatest(getData,addPost)
}

function* watchPostValue(){
    yield takeLatest(postData,postValue)
}


export function* postSaga() {
    yield all([fork(watchAddPost),fork(watchPostValue)])
}