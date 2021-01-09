import React from 'react'
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";

export default function Main() {

    return (
        <div className="container">
            <Navbar/>
            <PokemonList/>
        </div>
    )
}