import React from "react";
import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogContent,
    Toolbar,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../theme/theme";
import { useDispatch } from "react-redux";
import { changeTheme } from "./store/actions";

const useStyles = makeStyles({
    subtitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

const DashboardDialog = props => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const closeDialog = () => {
        props.setDialogToggler(false);
    };

    return (
        <Dialog
            classes={{
                paper: "m-24",
            }}
            open={props.open}
            onClose={closeDialog}
            fullWidth
            maxWidth="xs"
        >
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography variant="subtitle1" color="inherit">
                        Temas
                    </Typography>
                </Toolbar>
                <div className={classes.subtitle}>
                    Elejir tema de aplicación
                </div>
            </AppBar>
            <div>
                <DialogContent classes={{ root: "p-24" }}>
                    {themes.map((item, i) => {
                        return (
                            <Card
                                key={i}
                                style={{
                                    margin: 10,
                                }}
                            >
                                <CardContent
                                    style={{
                                        background: item.mainColor,
                                        color: item.contrastColor
                                            ? item.contrastColor
                                            : "",
                                    }}
                                >
                                    <Typography>{item.themeName}</Typography>
                                </CardContent>
                                <CardActions
                                    style={{
                                        backgroundColor:
                                            item.theme.palette.background.paper,
                                    }}
                                >
                                    <Button
                                        style={{
                                            backgroundColor: item.mainColor,
                                            color: item.contrastColor,
                                            border: item.mainColor,
                                        }}
                                        variant="outlined"
                                        onClick={() =>
                                            dispatch(changeTheme(item.theme))
                                        }
                                    >
                                        Aplicar
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })}
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default DashboardDialog;
