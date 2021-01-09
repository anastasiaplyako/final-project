import React from 'react';
import {Link} from "react-router-dom";
import '../components/list.css'

export default function CardUI(props) {

    return (
        <div className="pokedex_pokemon">
            <Link to={`/pokemons/${props.id}`}>
                <img
                    src={props.image}
                    alt="Изображение покемона"
                />
                <p>{`Имя: ${props.name}`}</p>
            </Link>
            {!props.isCatch
                ? <button
                    onClick={props.catch}
                >Поймать покемона</button>
                : <button
                    disabled
                >
                    Покемон уже пойман
                </button>
            }
        </div>
    );
}

