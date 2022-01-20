import { Button, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../../../pages/loadingScreen";
import { deleteRate, loadRates, setEntityToUpdate } from "../store/actions";
import TableHead from "./tableHead";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const RatesTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(store => store.rates.loading);
    const deleted = useSelector(store => store.rates.deleted);
    const deleting = useSelector(store => store.rates.deleting);
    const deletingError = useSelector(store => store.rates.deletingError);
    const loaded = useSelector(store => store.rates.loaded);
    const data = useSelector(store => store.rates.data);

    useEffect(() => {
        if (loaded === false) {
            dispatch(loadRates());
        }if (deleted) {
            
            window.location.reload();
        }if(deletingError){
            alert("Ocurrio un error al borrar el elemento. Cargue de nuevo la página e inténtelo nuevamente")
            
        }
        // eslint-disable-next-line
    }, [loaded,deleted, deletingError]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (deleting) {
        return <LoadingScreen />;
    }

    const sendEntityToStore = (element) => {
        dispatch(setEntityToUpdate(element))
        navigate(`/rates/${element._id}`)
    }

    return (
        <div>
            <Button
                onClick={() => navigate("/rates/new")}
                variant="contained"
                color="secondary"
            >
                <span>Nuevo</span>
            </Button>
            <Table>
                <TableHead />
                <TableBody>
                    {data.map((element, i) => {
                        return (
                            <TableRow
                                hover
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="left">
                                    {element.description}
                                </TableCell>
                                <TableCell align="left">
                                    {element.value}
                                </TableCell>
                                <TableCell align="left">
                                    {element.type}
                                </TableCell>
                                <TableCell align="left">
                                    {element.observations}
                                </TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => {sendEntityToStore(element)}} >
                                        <EditIcon fontSize="large" />
                                    </Button>
                                    <Button>
                                        <DeleteIcon fontSize="large" onClick={() => {dispatch(deleteRate(element._id))}}/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default RatesTable;
