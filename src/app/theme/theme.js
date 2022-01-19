import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import dark from "../../colors/dark";
import skyBlue from "../../colors/skyBlue";

const lightText = {
    primary: "rgb(17, 24, 39)",
    secondary: "rgb(107, 114, 128)",
    disabled: "rgb(149, 156, 169)",
};

// const darkText = {
//     primary: "rgb(255,255,255)",
//     secondary: "rgb(229, 231, 235)",
//     disabled: "rgb(156, 163, 175)",
// };

const theme = createTheme({
    palette: {
        type: "light",
        text: lightText,
        common: {
            black: "rgb(17, 24, 39)",
            white: "rgb(255, 255, 255)",
        },
        primary: dark,
        secondary: {
            light: skyBlue[100],
            main: skyBlue[500],
            dark: skyBlue[900],
        },
        background: {
            paper: "#FFFFFF",
            default: "#f6f7f9",
        },
        error: red,
    },
    status: {
        danger: "orange",
    },
});

export default theme;
