import React, {useCallback, useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {
    catchPokemon,
    fetchAllPokemon,
    fetchCaughtPokemon, fetchCaughtPokemons,
    loadMore, resetCaughtPokemon,
    resetPage,
    resetPokemons
} from "../redux/actions/actions";
import PokemonCard from './PokemonCard'
import Loading from "../view/Loading";
import ListUI from "../view/ListUI";
import LoadMore from "./LoadMore";
import LoadMoreUI from "../view/LoadMoreUI";
import {VISIBLE} from "../const";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

export default (props) => {
    console.log("page new!!!!")
    const dispatch = useDispatch(); //позволяет диспатчить акшэны в стор

    useEffect(() => {
        dispatch(resetCaughtPokemon());
        dispatch(resetPokemons())
        dispatch(fetchCaughtPokemons())
    }, [dispatch]);

    const pokemons = useSelector(state => state.pokemons.caughtPokemons);
    console.log("pokemons", pokemons)

    return (
        <React.Fragment>
            <Navbar/>
            <ListUI> {
                pokemons.map(pokemon => (
                    <PokemonCard
                        pokemon={pokemon}
                        key={pokemon.id}
                    />
                ))
            }
            </ListUI>
        </React.Fragment>
    )
}
