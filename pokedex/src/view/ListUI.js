import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

export default (props) => {
    const useStyles = makeStyles({
        container__cards: {
            display: "flex",
            flexFlow: "row wrap",
            overflowY: "auto",
            height: "100%",
            justifyContent: "center",
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.container__cards}>
            {props.children}
        </div>
    )
}
