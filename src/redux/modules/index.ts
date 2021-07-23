import { combineReducers } from 'redux';
import postSlice from './post/post'

const rootReducer = combineReducers({
    posts : postSlice.reducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;