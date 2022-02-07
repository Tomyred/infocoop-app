import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    Collapse,
    Divider,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import navigationConfig from "../config/navigationConfig";

const Sidebar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = element => {
        setOpen({ [element]: !open[element] });
    };

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {navigationConfig.map((element, i) =>
                    element.collapse ? (
                        <div key={element.title}>
                            <ListItem
                                onClick={() => handleClick(element.title)}
                                button
                            >
                                {element.icon ? (
                                    <ListItemIcon>
                                        <Icon>{element.icon}</Icon>
                                    </ListItemIcon>
                                ) : (
                                    ""
                                )}
                                <ListItemText primary={element.title} />
                                {open[element.title] ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItem>
                            <Collapse in={open[element.title]}>
                                <List>
                                    {element.children.map(child => {
                                        return (
                                            <ListItem
                                                component={Link}
                                                to={child.route}
                                                button
                                                key={child.title}
                                            >
                                                {child.icon ? (
                                                    <ListItemIcon>
                                                        <Icon>
                                                            {child.icon}
                                                        </Icon>
                                                    </ListItemIcon>
                                                ) : (
                                                    ""
                                                )}
                                                <ListItemText
                                                    primary={child.title}
                                                />
                                                <Divider />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Collapse>
                            <Divider />
                        </div>
                    ) : (
                        <div key={element.title}>
                            <ListItem
                                component={Link}
                                to={element.route}
                                button
                            >
                                {element.icon ? (
                                    <ListItemIcon>
                                        <Icon>{element.icon}</Icon>
                                    </ListItemIcon>
                                ) : (
                                    ""
                                )}
                                <ListItemText primary={element.title} />
                            </ListItem>
                            <Divider />
                        </div>
                    )
                )}
            </List>
        </div>
    );
};

export default Sidebar;
