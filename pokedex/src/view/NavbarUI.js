import React from 'react'
import {NavLink} from "react-router-dom";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        justifyContent: 'center',
    },
    menu__item: {
        margin: '0.5em',
        padding: '0.5em',
        border: '1px solid #b97fc9',
        textDecoration: 'none',
        fontSize: '18px',
    },
    active: {
        margin: '0.5em',
        padding: '0.5em',
        border: '1px solid #b97fc9',
        textDecoration: 'none',
        fontSize: '18px',
        color: 'white',
        backgroundColor: "#b97fc9",
    },
}));

export default function NavbarUI() {
    const classes = useStyles();
    let urlMain = classes.menu__item;
    let urlCaught = classes.menu__item;
    return (
        <nav className={classes.menu}>
            <NavLink className={urlMain} to="/" > Главная </NavLink>
            <NavLink className={urlCaught} to="/caught" > Пойманные покемоны </NavLink>
        </nav>
    )
}