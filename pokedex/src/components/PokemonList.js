import React, {useCallback, useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {
    catchPokemon,
    fetchAllPokemon,
    fetchCaughtPokemon,
    loadMore,
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
    const pokemons = useSelector(state => state.pokemons.pokemons);;

    const page = useSelector(state => state.pokemons.page)

    const loadMorePokemons = useCallback(() => {
        dispatch(loadMore());
    }, [dispatch])

    useEffect(() => {
        //dispatch(resetPokemons());
        dispatch(fetchAllPokemon(page));
    }, [dispatch, page]);

    let buttonIsVisible = pokemons.length / (page * VISIBLE) < VISIBLE && !props.isCatch
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
            {buttonIsVisible && <LoadMoreUI loadMore={loadMorePokemons}/>}
        </React.Fragment>
    )
}
