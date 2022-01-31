import { Button, Icon, Input, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { setSearchText } from "./store/actions";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 15,
    },
    childContainer: {
        display: "flex",
        alignItems: "center",
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 12,
        paddingLeft: 12,
    },
    text: {
        marginRight: 12,
        marginLeft: 12,
        fontSize: 24,
    },
    paper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 512,
        paddingRight: 200,
        paddingLeft: 4,
    },
    input: {
        width: "100%",
        borderRadius: 16,
    },
});

const RatesHeader = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const searchEntity = e => {
        dispatch(setSearchText(e.target.value))
    };

    return (
        <div className={classes.container}>
            <div className={classes.childContainer}>
                <Typography
                    component={motion.span}
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                    delay={300}
                    className={classes.text}
                >
                    Tarifas
                </Typography>
            </div>

            <div className={classes.searchContainer}>
                <Paper
                    component={motion.div}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                    className={classes.paper}
                >
                    <Icon color="action">search</Icon>

                    <Input
                        placeholder="Buscar"
                        className={classes.input}
                        disableUnderline={true}
                        autoFocus={true}
                        fullWidth
                        inputProps={{
                            "aria-label": "Search",
                        }}
                        onChange={e => searchEntity(e)}
                    />
                </Paper>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            >
                <Button
                    component={Link}
                    to={`/rates/new`}
                    variant="contained"
                    color="secondary"
                >
                    <span>Nuevo</span>
                </Button>
            </motion.div>
        </div>
    );
};

export default RatesHeader;
