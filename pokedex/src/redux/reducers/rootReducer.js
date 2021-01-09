import {combineReducers} from "redux";
import {pokemonReducer} from "./pokemonReducer";
import {appReducer} from "./appReducer";

export const rootReducers = combineReducers({
    pokemons: pokemonReducer,
    app: appReducer,
})