import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container__load: {
        width: '100%',
        display: "flex",
        justifyContent: 'center',
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.container__load}>
            <CircularProgress/>
        </div>
    )
}