import { red } from "@mui/material/colors";
import dark from "../../colors/dark";
import skyBlue from "../../colors/skyBlue";

const lightText = {
    primary: "rgb(17, 24, 39)",
    secondary: "rgb(107, 114, 128)",
    disabled: "rgb(149, 156, 169)",
};

const darkText = {
    primary: "rgb(255,255,255)",
    secondary: "rgb(229, 231, 235)",
    disabled: "rgb(156, 163, 175)",
};

export const defaultTheme = {
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
};

const darkTheme1 = {
    palette: {
        type: "dark",
        text: darkText,
        primary: dark,
        secondary: {
            light: darkText,
            main: skyBlue[500],
            dark: skyBlue[900],
        },
        background: {
            paper: "#1E2125",
            default: "#121212",
        },
        error: red,
    },
    status: {
        danger: "orange",
    },
};

const darkTheme2 = {
    palette: {
        type: "dark",
        text: darkText,
        primary: {
            light: "#C2C2C3",
            main: "#323338",
            dark: "#131417",
        },
        secondary: {
            light: "#B8E1D9",
            main: "#129B7F",
            dark: "#056D4F",
            contrastText: "#FFFFFF",
        },
        background: {
            paper: "#262526",
            default: "#1E1D1E",
        },
        error: red,
    },
    status: {
        danger: "orange",
    },
};

const lightTheme1 = {
    palette: {
        type: "light",
        text: lightText,
        primary: {
            light: "#fdf3da",
            main: "#f8d683",
            dark: "#f3bc53",
            contrastText: "#252525",
        },
        secondary: {
            light: "#FADCB3",
            main: "#F3B25F",
            dark: "#ec9339",
            contrastText: "#252525",
        },
        background: {
            paper: "#FAFBFD",
            default: "#FFFFFF",
        },
        error: red,
    },
    status: {
        danger: "orange",
    },
};

const lightTheme2 = {
    palette: {
        type: "light",
        text: lightText,
        primary: {
            light: "#D9C8CE",
            main: "#80485B",
            dark: "#50212F",
        },
        secondary: {
            light: "#FFE3BF",
            main: "#FFB049",
            dark: "#FF8619",
            contrastText: "#252525",
        },
        background: {
            paper: "#FFF0DF",
            default: "#FAFAFE",
        },
        error: red,
    },
    status: {
        danger: "orange",
    },
};

export const themes = [
    {
        themeName: "Tema por defecto",
        theme: defaultTheme,
        mainColor: "#212a38",
        contrastColor: "#FFFFFF",
    },
    {
        themeName: "Tema oscuro 1",
        theme: darkTheme1,
        mainColor: "#1E2125",
        contrastColor: "#FFFFFF",
    },
    {
        themeName: "Tema oscuro 2",
        theme: darkTheme2,
        mainColor: "#131417",
        contrastColor: "#FFFFFF",
    },
    {
        themeName: "Tema luminoso 1",
        theme: lightTheme1,
        mainColor: "#F3B25F",
    },
    {
        themeName: "Tema luminoso 2",
        theme: lightTheme2,
        mainColor: "#80485B",
    },
];
