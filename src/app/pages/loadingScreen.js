import { LinearProgress, Typography } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        height: "50vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
    },
    progress: {
        width: "100%",
        margin: 20,
    },
});

const LoadingScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography
                className={classes.progress}
                variant="h4"
                color="textSecondary"
            >
                Cargando...
            </Typography>
            <LinearProgress className={classes.progress} color="secondary" />
        </div>
    );
};

export default LoadingScreen;
