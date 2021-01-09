import React from 'react'
import {makeStyles} from '@material-ui/core';
import {loadMore} from "../redux/actions/actions";

const useStyles = makeStyles((theme) => ({

    container__load: {
        width: "100%",
        textAlign: "center",
    },
    container__load__button: {
        width: "50%",
        textAlign: "center",
        height: "2.7em",
        backgroundColor: "#3fb54f",
        border: "none",
        color: "white",
        margin: "3% 0",
        outline: "none",
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container__load}>
            <button
                className={classes.container__load__button}
                onClick={props.loadMore}
            >
                Загрузить больше покемонов
            </button>
        </div>
    )
}
