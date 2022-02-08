import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Fab,
    Icon,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteLink, loadLinks } from "./store/actions/keypad";
import KeypadForm from "./dialog/form";
import LoadingScreen from "../../pages/loadingScreen";

// const useStyles = makeStyles(theme => ({
//     header: {
//         background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//         color: theme.palette.getContrastText(theme.palette.primary.main),
//     },
//     headerIcon: {
//         position: "absolute",
//         top: -64,
//         left: 0,
//         opacity: 0.04,
//         fontSize: 512,
//         width: 512,
//         height: 512,
//         pointerEvents: "none",
//     },
// }));

const useStyles = makeStyles({
    header: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    addButton: {
        margin: 30,
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    card: {
        width: "30%",
        height: 256,
        minWidth: 250,
        position: "relative",
        marginTop: 25,
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    cardActions: {
        width: 100,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const LinksKeypad = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const links = useSelector(store => store.keypad.data);
    const loaded = useSelector(store => store.keypad.loaded);
    const loading = useSelector(store => store.keypad.loading);
    const saved = useSelector(store => store.keypad.saved);
    const deleting = useSelector(store => store.keypad.deleting);
    const deleted = useSelector(store => store.keypad.deleted);
    const [searchText, setSearchText] = useState("");
    const [dialogToggler, setDialogToggler] = useState(false);

    useEffect(() => {
        if (loaded === false) {
            dispatch(loadLinks());
        }
        if (saved) {
            dispatch(loadLinks());
        }
        if (deleted) {
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [saved, deleted]);

    const filteredData = () => {
        return links.filter(
            element =>
                element.title.toLowerCase().includes(searchText.toLowerCase()) |
                element.description
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
        );
    };

    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    };
    return (
        <motion.div
            className="flex flex-wrap py-24"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <KeypadForm
                open={dialogToggler}
                setDialogToggler={setDialogToggler}
            />
            <div className={classes.header}>
                <TextField
                    style={{ margin: 30 }}
                    label="Buscar enlace"
                    inputProps={{
                        "aria-label": "Search",
                    }}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setSearchText(e.target.value)}
                />
                <Fab
                    component={motion.div}
                    className={classes.addButton}
                    style={{ margin: 30 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.6 } }}
                    color="secondary"
                    aria-label="Crear"
                    onClick={() => setDialogToggler(true)}
                >
                    <Icon>add</Icon>
                </Fab>
            </div>

            {loading || deleting ? (
                <LoadingScreen />
            ) : (
                <motion.div
                    className="flex flex-wrap py-24"
                    initial="hidden"
                    animate="show"
                    variants={item}
                >
                    <motion.div className={classes.cardContainer}>
                        {filteredData().map(link => (
                            <Card
                                className={classes.card}
                                elevation={5}
                                key={link._id}
                            >
                                <div
                                    className={classes.cardHeader}
                                    style={{ backgroundColor: link.color }}
                                >
                                    <Typography variant="h6">
                                        {link.title}
                                    </Typography>

                                    <Icon
                                        style={{
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            dispatch(deleteLink(link._id));
                                        }}
                                    >
                                        delete
                                    </Icon>
                                </div>
                                <CardContent className={classes.cardContent}>
                                    <Typography
                                        variant="subtitle1"
                                        className="text-center text-16 font-medium"
                                    >
                                        {link.description}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {link.url}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button
                                        style={{ borderRadius: 50 }}
                                        target="_blank"
                                        href={link.url}
                                        color="primary"
                                        variant="outlined"
                                    >
                                        Ir
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default LinksKeypad;
