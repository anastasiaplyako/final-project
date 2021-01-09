import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemon, resetPokemons} from "../redux/actions/actions";
import PokemonPageUI from "../view/PokemonPageUI";
import NavbarUI from "../view/NavbarUI";

const PokemonPage = (props) => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemons.pokemon);

    let id = props.match.params.id;
    useEffect(() => {
        dispatch(resetPokemons())
        dispatch(fetchPokemon(id));
    }, [dispatch]);

    return (
        <>
            <NavbarUI/>
            <PokemonPageUI pokemon={pokemon}/>
        </>
    )
}

export default PokemonPage;