import React, {useCallback} from 'react';
import CardUI from "../view/CardUI";
import {TYPE_IMAGE} from "../const";
import {connect, useDispatch, useSelector} from 'react-redux'
import {catchPokemon} from "../redux/actions/actions";

export default (props) => {
    console.log("props = ", props);
    const dispatch = useDispatch();

    const caughtPokemonHandle = useCallback(
        (pokemon) => {
            dispatch(catchPokemon(pokemon));
        },
        [dispatch]
    );

    return (
        <CardUI
            image={"/img/" + props.pokemon.id + TYPE_IMAGE}
            name={props.pokemon.name}
            id={props.pokemon.id}
            linkToPokemon={"/pokemons/" + props.pokemon.id}
            isCatch={props.pokemon.isCatch}
            catch={() => caughtPokemonHandle(props.pokemon)}
        />
    );
}
