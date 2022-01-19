import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const rows = ["Descripción", "Valor", "Tipo", "Observaciones", "Acciones"];
const RatesTableHead = () => {
    return (
        <TableHead>
            <TableRow className="h-48 sm:h-64 ">
                {rows.map((row, i) => {
                    return (
                        <TableCell
                            className="p-4 md:p-16"
                            key={i}
                            padding="normal"
                            align="left"
                        >
                            <b>{row}</b>
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};

export default RatesTableHead;
