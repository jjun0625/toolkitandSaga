import createSagaMiddleware  from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import rootReducer from './modules/index'
import {all} from 'redux-saga/effects'
import {postSaga} from './modules/post/saga'

const sagaMiddleware = createSagaMiddleware();


const enhancedReducer = rootReducer;
const env = process.env.NODE_ENV 

function* entrySaga(){
    yield all([postSaga()])
}


function configureStore() {
    const store = createStore(
      enhancedReducer,
      env === "production"
        ? applyMiddleware(sagaMiddleware)
        :composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    );
    
    sagaMiddleware.run(entrySaga);
    return { store };
  }

export const { store } = configureStore();