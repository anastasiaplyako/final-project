import {
    CAUGHT_POKEMON,
    CHANGE_STATUS,
    FETCH_PAGE,
    FETCH_POKEMON,
    FETCH_POKEMONS,
    PUT_POKEMON, RESET_CAUGHT_POKEMONS, RESET_PAGE,
    RESET_POKEMONS
} from "../actions/actionTypes";

const initialState = {
    pokemons: [],
    pokemon: {},
    caughtPokemons: [],
    isFetchCaughtPokemons: false, // false - show all pokemon, true - download caught pokemon
    page: 1,
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS: {
            console.log("state.pokemons = ", state)
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
        case RESET_PAGE: {
            return {
                ...state,
                page: 1
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
        case RESET_CAUGHT_POKEMONS: {
            return {
                ...state,
                caughtPokemons: []
            }
        }

        case CAUGHT_POKEMON: {
            console.log("CAUGHT_POKEMON")
            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons,...action.payload ]
            }
        }
        case RESET_POKEMONS: {
            return {
                ...state,
                page: 1,
                pokemons: []
            }
        }
        case FETCH_PAGE: {
            console.log("Fetch_page")
            console.log("start = ", state.page);
            return {
                ...state,
                page: state.page + 1
            }
        }

        default: {
            return state;
        }
    }
}