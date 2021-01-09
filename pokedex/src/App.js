/*import logo from './logo.svg';*/
/*import './App.css';*/
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import PokemonPage from "./components/PokemonPage";
import PokemonList from "./components/PokemonList";
import CaughtPokemons from "./components/CaughtPokemons";

function App(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PokemonList isCatch={false}/>
                </Route>
                <Route exact path="/caught">
                    <CaughtPokemons />
                </Route>
                <Route
                    exact
                    path="/pokemons/:id"
                    render={({
                                 match
                             }) => (
                        <PokemonPage match={match} />
                    )}
                >
                    {console.log("this is route id")}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
