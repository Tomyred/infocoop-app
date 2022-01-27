import React from "react";
import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
} from "@mui/material";

const rows = ["Descripción", "Valor", "Tipo", "Observaciones", "Acciones"];
const RatesTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                {rows.map((row, i) => {
                    return (
                        <TableCell className="p-4 md:p-16" key={i}>
                            <Tooltip
                                title="Sort"
                                placement="bottom-start"
                                enterDelay={300}
                            >
                                <TableSortLabel>{row}</TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};

export default RatesTableHead;
