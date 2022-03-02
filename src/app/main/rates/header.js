import { Button, Icon, Input, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchText } from "./store/actions/rates";

const RatesHeader = ({ classes }) => {
    const dispatch = useDispatch();

    const searchEntity = e => {
        dispatch(setSearchText(e.target.value));
    };

    return (
        <div className={classes.headerContainer}>
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
