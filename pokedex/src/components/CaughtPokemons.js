import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    fetchCaughtPokemons,
    resetCaughtPokemon,
    resetPokemons
} from "../redux/actions/actions";
import PokemonCard from './PokemonCard'
import ListUI from "../view/ListUI";
import NavbarUI from "../view/NavbarUI";

export default () => {
    const dispatch = useDispatch(); //позволяет диспатчить акшэны в стор

    useEffect(() => {
        dispatch(resetCaughtPokemon());
        dispatch(resetPokemons())
        dispatch(fetchCaughtPokemons())
    }, [dispatch]);

    const pokemons = useSelector(state => state.pokemons.caughtPokemons);

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
        </React.Fragment>
    )
}
