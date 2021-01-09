import React, {useCallback} from 'react'
import NavbarUI from "../view/NavbarUI";
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, resetPokemons} from "../redux/actions/actions";

export default function Navbar() {
    const dispatch = useDispatch();
    //const isFetchCaughtPokemons = useSelector(state => state.pokemons.isFetchCaughtPokemons)
    const changeStatusPokemons = useCallback(() => {
        dispatch(resetPokemons());
    }, [dispatch])

    return (
        <NavbarUI/>
    )
}