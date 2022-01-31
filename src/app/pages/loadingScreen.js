import { LinearProgress, Typography } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        margin: 150,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    containerChild: {
        width: "100%"
    },
    element: {
        margin: 40

    },
});

const LoadingScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.containerChild} >
                <Typography
                    className={classes.element}
                    variant="h4"
                    color="textSecondary"
                >
                    Cargando...
                </Typography>
                <LinearProgress className={classes.element} color="secondary" />
            </div> 
        </div>
    );
};

export default LoadingScreen;
