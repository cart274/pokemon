import { LOAD_POKEMONS_LOADING, LOAD_POKEMONS_SUCCESS, LOAD_POKEMONS_ERROR,
    LOAD_POKEMON_DETAIL_LOADING, LOAD_POKEMON_DETAIL_SUCCESS, LOAD_POKEMON_DETAIL_ERROR  } from '../../state/types'

const initialState = {
  data: {},
  dataDetail: {},
  loading: false,
  error: ''
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
      case LOAD_POKEMONS_LOADING: {
          return {
              ...state,
              loading: true,
              error:''
          };
      }
      case LOAD_POKEMONS_SUCCESS: {
          return {
              ...state,
              data: action.data,
              loading: false
          }
      }
      case LOAD_POKEMONS_ERROR: {
          return {
              ...state,
              loading: false,
              error: action.error
          };
      }
      case LOAD_POKEMON_DETAIL_LOADING: {
        return {
            ...state,
            loading: true,
            error:''
        };
    }
    case LOAD_POKEMON_DETAIL_SUCCESS: {
        return {
            ...state,
            dataDetail: action.data,
            loading: false
        }
    }
    case LOAD_POKEMON_DETAIL_ERROR: {
        return {
            ...state,
            loading: false,
            error: action.error
        };
    }
      default: {
          return state;
      }
  }
}
