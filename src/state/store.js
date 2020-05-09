import { createStore, combineReducers, applyMiddleware  } from 'redux';
import user  from '../containers/Home/reducers'
import thunk from 'redux-thunk'
const combinedReducers = combineReducers({
    user
})

const store = createStore( combinedReducers, applyMiddleware(thunk))

export default store;