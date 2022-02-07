import {
    AppBar,
    Button,
    Dialog,
    DialogContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import select_colors from "./selectColors";
import { saveLink } from "../store/actions/keypad";

const schema = yup.object().shape({
    title: yup.string().required("Este campo es requerido"),
    url: yup.string().required("Este campo es requerido"),
    color: yup.string(),
    description: yup.string(),
});

const KeypadForm = props => {
    const routeParams = useParams();
    const dispatch = useDispatch();
    const linkId = routeParams.id;
    const entity = useSelector(store => store.keypad.entity);
    const saved = useSelector(store => store.keypad.saved);

    const defaultValues = linkId ? entity : null;

    const { formState, control, getValues, reset } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const { isValid, errors } = formState;

    useEffect(() => {
        if (saved) {
            closeDialog();
        }
        // eslint-disable-next-line
    }, [saved]);

    const closeDialog = () => {
        reset();
        props.setDialogToggler(false);
    };

    const colorField = () => {
        return select_colors.map((color, i) => (
            <MenuItem key={i} value={color.value}>
                {color.name}
            </MenuItem>
        ));
    };

    const onSaveHandler = () => {
        dispatch(saveLink(getValues()));
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
                        Crear enlace
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <DialogContent classes={{ root: "p-24" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Controller
                                name="title"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors.title}
                                        helperText={errors?.title?.message}
                                        label="Título"
                                        id="title"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Controller
                                name="url"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors.url}
                                        helperText={errors?.url?.message}
                                        label="URL"
                                        id="url"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Controller
                                name="color"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <FormControl
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="color">
                                            Color
                                        </InputLabel>
                                        <Select
                                            onChange={onChange}
                                            value={value}
                                            input={
                                                <OutlinedInput
                                                    name="color"
                                                    id="color"
                                                />
                                            }
                                        >
                                            {colorField()}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Controller
                                name="description"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors.description}
                                        helperText={
                                            errors?.description?.message
                                        }
                                        label="Descripción"
                                        id="description"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        multiline
                                        rows={5}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                            <Button
                                onClick={onSaveHandler}
                                variant="contained"
                                fullWidth
                                disabled={!isValid}
                            >
                                Enviar
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Button
                                onClick={closeDialog}
                                variant="contained"
                                fullWidth
                                color="error"
                            >
                                Cerrar
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default KeypadForm;
