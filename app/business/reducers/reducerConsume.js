import * as actionPokemones from '../actions/actionConsume'

const defaultstatus = {
    pokemones: [],
};

export const reducerCredits = (state = defaultstatus, action) => {
    switch (action.type) {
      case actionPokemones.GET_POKEMONES_REQUEST:
        return {
          ...state,
        };
      case actionPokemones.GET_POKEMONS_SUCCESS:
        return {
          ...state,
          pokemones: action.pokemones,
        };
      default:
        return {
          ...state,
        };
    }
  };