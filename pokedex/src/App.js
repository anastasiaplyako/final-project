import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PokemonPage from "./components/PokemonPage";
import PokemonList from "./components/PokemonList";
import CaughtPokemons from "./components/CaughtPokemons";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PokemonList/>
                </Route>
                <Route path="/caught">
                    <CaughtPokemons/>
                </Route>
                <Route
                    exact
                    path="/pokemons/:id"
                    render={({match}) => (
                        <PokemonPage match={match}/>
                    )}
                >
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
