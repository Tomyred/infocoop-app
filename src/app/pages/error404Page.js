import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

const Error404page = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.1 },
                    }}
                >
                    <Typography variant="h1" color="inherit">
                        404
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                >
                    <Typography variant="h5" color="textSecondary">
                        No se ha podido encontrar la página solicitada
                    </Typography>
                </motion.div>
            </div>
        </div>
    );
};

export default Error404page;
