import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    fetchAllPokemon,
    loadMore,
} from "../redux/actions/actions";
import PokemonCard from './PokemonCard'
import ListUI from "../view/ListUI";
import LoadMoreUI from "../view/LoadMoreUI";
import {VISIBLE} from "../const";
import NavbarUI from "../view/NavbarUI";

export default () => {
    const dispatch = useDispatch(); //позволяет диспатчить акшэны в стор
    const pokemons = useSelector(state => state.pokemons.pokemons);

    const page = useSelector(state => state.pokemons.page)

    const loadMorePokemons = useCallback(() => {
        dispatch(loadMore());
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllPokemon(page));
    }, [dispatch, page]);

    let buttonIsVisible = pokemons.length / (page * VISIBLE) < VISIBLE
    return (
        <React.Fragment>
            <NavbarUI/>
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
