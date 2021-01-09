import {
    FETCH_POKEMONS,
    FETCH_POKEMON,
    SHOW_LOADER,
    HIDE_LOADER,
    PUT_POKEMON,
    CAUGHT_POKEMON, CHANGE_STATUS, RESET_POKEMONS, FETCH_PAGE, RESET_PAGE, RESET_CAUGHT_POKEMONS
} from './actionTypes'
import {VISIBLE} from "../../const";

export function fetchAllPokemon(page) {
    const visible = VISIBLE;
    return async dispatch => {
        /*dispatch(showLoader());*/
        /*let url = (!statusPokemons)
            ? `http://localhost:3001/pokemons?_page=${page}&_limit=${VISIBLE}`
            : `http://localhost:3001/pokemons/?isCatch=true&_page=${page}&_limit=${VISIBLE}`;*/
        let url = `http://localhost:3001/pokemons?_page=${page}&_limit=${VISIBLE}`
        const response = await fetch(url);
        const json = await response.json();
        console.log('json = ', json);
        dispatch({
            type: FETCH_POKEMONS,
            payload: json,
        })
        /*dispatch(hideLoader());*/
    }
}

export function fetchCaughtPokemons() {
    return async dispatch => {
        let url = `http://localhost:3001/pokemons/?isCatch=true`
        const response = await fetch(url);
        const json = await response.json();
        console.log('json = ', json);
        dispatch({
            type: CAUGHT_POKEMON,
            payload: json,
        })
        /*dispatch(hideLoader());*/
    }
}

export function fetchPokemon(id) {
    return async dispatch => {
        dispatch(showLoader());
        let url = "http://localhost:3001/pokemons/" + id;
        const response = await fetch(url);
        const json = await response.json();
        dispatch({
            type: FETCH_POKEMON,
            payload: json,
        })
    }
}

export function catchPokemon(pokemon) {
    pokemon.isCatch = true;
    pokemon.dateCatch = new Date().toLocaleDateString();
    console.log("Gotcha!");
    return async (dispatch) => {
        const response = await fetch(
            `http://localhost:3001/pokemons/${pokemon.id}`,
            {
                method: "PUT",
                body: JSON.stringify(pokemon),
                headers: {"Content-type": "application/json"},
            }
        );
        const json = await response.json();
        dispatch({type: PUT_POKEMON, payload: json});
    };
}

export function fetchCaughtPokemon() {
    console.log("fetchCaughtPokemon");
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/pokemons/?isCatch=true`);
        const json = await response.json();
        dispatch({type: CAUGHT_POKEMON, payload: json});
    };
}


export function loadMore() {
    return {
        type: FETCH_PAGE
    }
}

export function resetPage() {
    return {
        type: RESET_PAGE
    }
}

export function resetPokemons() {
    return {
        type: RESET_POKEMONS
    }
}


export function resetCaughtPokemon() {
    return {
        type: RESET_CAUGHT_POKEMONS
    }
}


export function changeStatus() {
    return {
        type: CHANGE_STATUS
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}