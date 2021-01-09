import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPokemon, fetchPokemon, resetPokemons} from "../redux/actions/actions";
import Navbar from "./Navbar";
import PokemonPageUI from "../view/PokemonPageUI";

const PokemonPage = (props) => {
    console.log("param = ", props.match.params.id/*match.params.id*/);
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemons.pokemon);

    let id = props.match.params.id;
    useEffect(() => {
        console.log("dispatch single poke")
        dispatch(fetchPokemon(id));
    }, [dispatch]);

    return (
        <>
            <Navbar/>
            <PokemonPageUI pokemon={pokemon}/>
        </>
    )
}

export default PokemonPage;