import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";
import { saveRate, updateRate } from "../store/actions";
import LoadingScreen from "../../../../pages/loadingScreen";

const schema = yup.object().shape({
    description: yup.string().required("Este campo es requerido"),
    value: yup.number().required("Este campo es requerido"),
    type: yup.string().required("Este campo es requerido"),
    observations: yup.string(),
});

const useStyles = makeStyles({
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    backButton: {
        textAlign: "center",
        margin: "20px",
    },
});

const RatesForm = () => {
    const navigate = useNavigate();
    const routeParams = useParams();
    const dispatch = useDispatch();
    const rateId = routeParams.id;
    const entity = useSelector(store => store.rates.entity);
    const saving = useSelector(store => store.rates.saving);
    const saved = useSelector(store => store.rates.saved);
    const savingError = useSelector(store => store.rates.savingError);
    const classes = useStyles();

    const defaultValues = rateId ? entity : null

    const { formState, control, getValues} = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (saved) {
            goBack();
        }
    }, [saved]);

    useEffect(() => {
        if (savingError) {
            alert("El guardado ha fallado exitosamente");
        }
    }, [savingError]);



    const { isValid, errors } = formState;

    
    const onSaveHandler = () => {
        if(rateId){
            dispatch(updateRate(getValues(), getValues()._id))
        }else{
            dispatch(saveRate(getValues()));
        }
    };

    const goBack = () => {
        navigate(-1);
    }

    if (saving) {
        return <LoadingScreen />;
    }

    return (
        <Grid container spacing={2}>
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                className={classes.buttonContainer}
            >
                <Button
                    className={classes.button}
                    onClick={() => navigate(-1)}
                    color="inherit"
                >
                    <ArrowBackIcon />
                    <span>Volver</span>
                </Button>
                <Button
                    onClick={onSaveHandler}
                    sx={{ flexDirection: 'row-reverse' }}
                    variant="contained"
                    color="secondary"
                    disabled={!isValid}
                >
                    <span>Guardar</span>
                </Button>
            </motion.div>
            <Grid item xs={12}>
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.description}
                            helperText={errors?.description?.message}
                            label="Descripción"
                            id="description"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Controller
                    name="value"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.value}
                            helperText={errors?.value?.message}
                            label="Valor"
                            id="value"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Controller
                    name="type"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.type}
                            helperText={errors?.type?.message}
                            label="Tipo"
                            id="type"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12}>
                <Controller
                    name="observations"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.observations}
                            helperText={errors?.observations?.message}
                            label="Observaciones"
                            id="observations"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={20}
                        />
                    )}
                />
            </Grid>
        </Grid>
    );
};

export default RatesForm;
