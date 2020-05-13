import { createStore, combineReducers, applyMiddleware  } from 'redux';
import pokemons  from '../containers/Home/reducers'
import thunk from 'redux-thunk'
const combinedReducers = combineReducers({
    pokemons
})

const store = createStore( combinedReducers, applyMiddleware(thunk))

export default store;