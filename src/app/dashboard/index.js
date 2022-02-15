import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router";
import routes from "../config/routesConfig";
import { createTheme, Paper } from "@mui/material";
import Error404page from "../pages/error404Page";
import { makeStyles } from "@mui/styles";
import PaletteIcon from "@mui/icons-material/Palette";
import { ThemeProvider } from "@mui/system";
import DashboardDialog from "./dialog";
import { useSelector } from "react-redux";
import { defaultTheme } from "../theme/theme";
// import Buttons from "../main/buttons";
import Sidebar from "./sidebar";

const drawerWidth = 240;

const useStyles = makeStyles({
    componentContainer: {
        padding: 25,
        overflowX: "auto",
        overflowY: "auto",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

function Dashboard() {
    const [dialogToggler, setDialogToggler] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const chosedTheme = useSelector(store => store.dashboard.theme);
    const theme = chosedTheme === null ? defaultTheme : chosedTheme;
    const themes = createTheme(theme);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window.document.body;

    return (
        <ThemeProvider theme={themes}>
            <Box sx={{ display: "flex" }}>
                <DashboardDialog
                    open={dialogToggler}
                    setDialogToggler={setDialogToggler}
                />
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            InfoCoop
                        </Typography>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setDialogToggler(true)}
                        >
                            <PaletteIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                        }}
                    >
                        <Sidebar />
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                        }}
                        open
                    >
                        <Sidebar />
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    className={classes.componentContainer}
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />
                    <Paper className={classes.componentContainer} elevation={3}>
                        <Routes>
                            <Route
                                path="*"
                                exact={true}
                                element={<Error404page />}
                            />
                            {routes.map((routeConfig, i) =>
                                routeConfig.map(route => {
                                    return (
                                        <Route
                                            key={i}
                                            path={route.path}
                                            exact={route.exact}
                                            element={route.component}
                                        />
                                    );
                                })
                            )}
                        </Routes>
                        {/* <Buttons /> */}
                    </Paper>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Dashboard;
