import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {TYPE_IMAGE} from "../const";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap',
    },
    root: {
        maxWidth: 1000,
        margin: "0.4em",
        display: "flex",
    },
    details: {
        margin: "3%",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
    },
});

export default function CardUI(props) {
    const classes = useStyles();
    const pokemon = props.pokemon;
    const pokemonStatus = (pokemon.isCatch) ? 'Пойман' : 'Не пойман';
    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={`/img/${pokemon.id}${TYPE_IMAGE}`}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card>
            <div className={classes.details}>
                <Typography variant="h5">
                    Имя: {pokemon.name}
                </Typography>
                <Typography variant="h6">
                    id: {pokemon.id}
                </Typography>
                <Typography variant="h6">
                    Статус: {pokemonStatus}
                </Typography>
                {pokemon.isCatch &&
                <Typography variant="h6">
                    Дата: {pokemon.dateCatch}
                </Typography>
                }

            </div>
        </div>
    );
}