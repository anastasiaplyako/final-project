import {
    CAUGHT_POKEMON,
    FETCH_PAGE,
    FETCH_POKEMON,
    FETCH_POKEMONS,
    PUT_POKEMON, RESET_CAUGHT_POKEMONS,
    RESET_POKEMONS
} from "../actions/actionTypes";

const initialState = {
    pokemons: [],
    pokemon: {},
    caughtPokemons: [],
    page: 1,
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS: {
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload)
            }
        }
        case FETCH_POKEMON: {
            return {
                ...state,
                pokemon: action.payload
            }
        }
        case PUT_POKEMON: {
            return {
                ...state,
                pokemons: state.pokemons.map(pokemon => {
                    if (pokemon.id === action.payload.id) {
                        return action.payload;
                    }
                    return pokemon;
                }),
            };
        }
        case CAUGHT_POKEMON: {
            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons, ...action.payload]
            }
        }
        case FETCH_PAGE: {
            return {
                ...state,
                page: state.page + 1
            }
        }
        case RESET_POKEMONS: {
            return {
                ...state,
                page: 1,
                pokemons: []
            }
        }
        case RESET_CAUGHT_POKEMONS: {
            return {
                ...state,
                caughtPokemons: []
            }
        }


        default: {
            return state;
        }
    }
}