import React from "react";
import RatesHeader from "./header";
import RatesTable from "./table/table";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    componentContainer: {
        padding: 15,
    },
    headerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
    childContainer: {
        display: "flex",
        alignItems: "center",
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 12,
        paddingLeft: 12,
    },
    paper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 512,
        paddingRight: 200,
    },
});

const Rates = () => {
    const classes = useStyles();
    return (
        <div className={classes.componentContainer}>
            <RatesHeader classes={classes} />
            <RatesTable classes={classes} />
        </div>
    );
};

export default Rates;
