import { LOAD_POKEMONS_LOADING, LOAD_POKEMONS_SUCCESS, LOAD_POKEMONS_ERROR } from '../../state/types'
import axios from 'axios'

export const getPokemons = (limit, offset) => dispatch => {
  dispatch({ type: LOAD_POKEMONS_LOADING });
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( response => dispatch({ type: LOAD_POKEMONS_SUCCESS, data: response.data })
    )
    .catch(error => dispatch({ type: LOAD_POKEMONS_ERROR, error: error.message || 'Unexpected Error!!!' })
    )
};