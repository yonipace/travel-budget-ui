import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FlightIcon from "@mui/icons-material/Flight";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const list = [
    { text: "Trips", icon: <FlightIcon />, link: "/user", action: null },
    {
      text: "Profile",
      icon: <AccountCircleIcon />,
      link: "/profile",
      action: null,
    },
    { text: "Log Out", icon: <LogoutIcon />, link: "/login", action: null },
  ];

  return (
    <div>
      <IconButton sx={{ color: "inherit" }} onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ flexShrink: 0 }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <List>
          <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </ListItem>
          <Divider />
          {list.map((item) => (
            <ListItem disablePadding key={item.text}>
              <ListItemButton
                sx={{ pr: 6, py: 1 }}
                component={RouterLink}
                to={item.link}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
