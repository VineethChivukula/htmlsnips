import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import BasicTemplate from "./BasicTemplate";

const Sidebar = () => {
    const [state, setState] = useState(false);

    const toggle = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => {
        return (
            <Box
                sx={{
                    width:
                        anchor === "top" || anchor === "bottom" ? "auto" : 250,
                }}
                role="presentation"
                onClick={toggle(anchor, false)}
                onKeyDown={toggle(anchor, false)}
            >
                <List style={{ color: "#f6f7f9" }}>
                    {[
                        { text: "Home", component: Home },
                        {
                            text: "BasicTemplate",
                            component: BasicTemplate,
                        },
                    ].map(({ text, component }) => {
                        return (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={`/${text}`}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        );
    };

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div>
                        <FontAwesomeIcon
                            icon={faBars}
                            onClick={toggle(anchor, true)}
                            className="ficon"
                            color="white"
                            size="2x"
                        />
                    </div>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggle(anchor, false)}
                        PaperProps={{
                            style: { backgroundColor: "#101418" },
                        }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Sidebar;
