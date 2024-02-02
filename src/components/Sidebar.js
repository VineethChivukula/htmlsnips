import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Home from "./Home";

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
                    {[{ text: "Home", component: Home }].map(
                        ({ text, component }) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={`/${text}`}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
        );
    };

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        onClick={toggle(anchor, true)}
                        style={{ borderRadius: "40%", height: "60px" }}
                    >
                        =
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggle(anchor, false)}
                        PaperProps={{
                            style: { backgroundColor: "#1e1e1e" },
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
