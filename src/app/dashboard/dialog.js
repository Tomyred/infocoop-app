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
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        Temas
                    </Typography>
                </Toolbar>
                <div className={classes.subtitle}>
                    Elejir tema de aplicación
                </div>
            </AppBar>
            <div className="flex flex-col md:overflow-hidden">
                <DialogContent classes={{ root: "p-24" }}>
                    {themes.map((item, i) => {
                        return (
                            <Card
                                key={i}
                                className="flex flex-col h-256 shadow"
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
                                    className="flex flex-col flex-auto items-center justify-center"
                                >
                                    <Typography className="text-center text-16 font-medium">
                                        {item.themeName}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    style={{
                                        backgroundColor:
                                            item.theme.palette.background.paper,
                                    }}
                                >
                                    <Button
                                        className="justify-start px-32"
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

                {/* <DialogActions className="justify-between p-4 pb-16">
        
        <div className="px-16">
        
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={_.isEmpty(dirtyFields) || !isValid}
          >
            Guardar
          </Button>
          <Button
            variant="contained"
            type="reset"
            onClick={closeDialog}
          >
            Cancelar
          </Button>
        </div>

      </DialogActions> */}
            </div>
        </Dialog>
    );
};

export default DashboardDialog;
