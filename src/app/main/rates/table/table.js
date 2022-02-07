import {
    Button,
    Table,
    TableBody,
    TableCell,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../../pages/loadingScreen";
import {
    deleteRate,
    loadRates,
    setEntityToUpdate,
} from "../store/actions/rates";
import RatesTableHead from "./tableHead";
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
    const searchText = useSelector(store => store.rates.searchText);

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (loaded === false) {
            dispatch(loadRates());
        }
        if (deleted) {
            window.location.reload();
        }
        if (deletingError) {
            alert(
                "Ocurrio un error al borrar el elemento. Cargue de nuevo la página e inténtelo nuevamente"
            );
        }
        // eslint-disable-next-line
    }, [loaded, deleted, deletingError]);

    const filteredData = () => {
        return data.filter(
            data =>
                data.description
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) |
                data.value.toString().includes(searchText.toLowerCase()) |
                data.observations
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
        );
    };

    const handleEditClick = element => {
        dispatch(setEntityToUpdate(element));
        navigate(`/rates/${element._id}`);
    };

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(event.target.value);
    }

    function handleChangePage(event, value) {
        setPage(value);
    }

    if (loading) {
        return <LoadingScreen />;
    }

    if (deleting) {
        return <LoadingScreen />;
    }

    if (filteredData().length === 0) {
        return (
            <Typography
                style={{
                    textAlign: "center",
                    margin: 50,
                }}
                variant="h4"
                color="textSecondary"
            >
                No hay datos
            </Typography>
        );
    }

    return (
        <Table>
            <RatesTableHead />
            <TableBody>
                {filteredData()
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((element, i) => {
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
                                    <Button
                                        onClick={() => {
                                            handleEditClick(element);
                                        }}
                                    >
                                        <EditIcon fontSize="large" />
                                    </Button>
                                    <Button>
                                        <DeleteIcon
                                            fontSize="large"
                                            onClick={() => {
                                                dispatch(
                                                    deleteRate(element._id)
                                                );
                                            }}
                                        />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
            <TablePagination
                count={filteredData().length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    "aria-label": "Previous Page",
                }}
                nextIconButtonProps={{
                    "aria-label": "Next Page",
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Table>
    );
};

export default RatesTable;
