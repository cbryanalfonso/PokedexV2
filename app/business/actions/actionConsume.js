export const GET_POKEMONES_REQUEST = "GET_POKEMONES_REQUEST";
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
export const GET_POKEMONES_ERROR = "GET_POKEMONES_ERROR";

//getPokemones
export const actionGetCredits = (uid) => ({
  type: GET_POKEMONES_REQUEST,
  uid,
});

export const actionSetCredits = (credits) => ({
  type: GET_POKEMONS_SUCCESS,
  pokemones,
});

export const actionSetError = (error) => ({
  type: GET_POKEMONES_ERROR,
  error,
});
