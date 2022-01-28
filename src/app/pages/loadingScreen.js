import { LinearProgress, Typography } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        margin: 150
    },
    child: {
        textAlign: "center",
        marginTop: "100px",
    },
});

const LoadingScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography
                className={classes.child}
                variant="h4"
                color="textSecondary"
            >
                Cargando...
            </Typography>
            <LinearProgress className={classes.child} color="primary" />
        </div>
    );
};

export default LoadingScreen;
