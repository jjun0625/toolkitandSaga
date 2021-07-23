import React, { InputHTMLAttributes, Suspense, useEffect, useState } from 'react';
import {useSelector, useDispatch,TypedUseSelectorHook} from 'react-redux'
import { RootState } from "./redux/modules";
import {getData,postData} from './redux/modules/post/post'
import {postStateType} from './redux/modules/post/types'


function App() {
  // const inputValue = useSelector((state:RootState)=>state.posts.value)
  const {isLoadingPost, hasPostError} = useSelector((state:RootState)=> state.posts)
  const [test,setTest] = useState<string>('')
  const [username,setUserame] = useState<string>('')
  const [name,setName] = useState<string>('')
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getData())
  },[dispatch])
  
const onSetTest = (e:React.ChangeEvent<HTMLInputElement>) => {
  setTest(e.target.value)
}

const onSetUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
  setUserame(e.target.value)
}

const onSetName = (e:React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value)
}
const onSubmitdata = () => {
  console.log('testtest',{test,username,name})
  return dispatch(postData({test,username,name}))
}
  return (
 <>
    { 
    hasPostError?(<div>데이터 요청에 실패했습니다.</div>):
    isLoadingPost? (<div><p>로딩중...</p></div>):(
      <div >
      <input type="text" value={test} onChange={onSetTest}/>
      <input type="text" value={username} onChange={onSetUsername}/>
      <input type="text" value={name} onChange={onSetName}/>
      <button onClick={onSubmitdata}>제출</button >
      </div>
 )}
</>
    
    
  );
}

export default App;

