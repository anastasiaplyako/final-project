import React from 'react';
import {Link} from "react-router-dom";
import '../components/list.css'

export default function CardUI(props) {
    //const classes = useStyles();

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

/*
<Card className={classes.root}>
    <Link to={`/pokemons/${props.id}`} className={classes.linkStyle}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={props.image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Link>
    <CardActions>
        {!props.isCatch
            ? <button
                className={classes.root__button}
                onClick={props.catch}
            >Поймать покемона</button>
            : <Button
                className={classes.root__button}
                disabled
            >
                Покемон уже пойман
            </Button>
        }


    </CardActions>
</Card>


<div className="pokedex_pokemon">
            <Link to={`/pokemons/${props.id}`}>
                <img
                    src={props.image}
                    alt="Изображение покемона"
                />
                <p>{`Имя: ${props.name}`}</p>
            </Link>
            <button>
                Поймать
            </button>
        </div>
*/
