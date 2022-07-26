import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { menuList } from "./menuList";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logout } from "../../reducers/authSlice";

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const trip = useSelector((state) => state.trip.trip);
  const doLogout = () => {
    dispatch(logout());
  };

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

          <ListItem disablePadding>
            {trip && (
              <ListItemButton component={RouterLink} to="/trip">
                <Typography
                  sx={{ pr: 5, pl: 2, py: 1 }}
                  variant="subheader"
                  fontSize="large"
                >
                  <strong>{trip ? trip.name : ""}</strong>
                </Typography>
              </ListItemButton>
            )}
          </ListItem>

          <ListItem disablePadding>
            {trip && (
              <ListItemButton
                component={RouterLink}
                to="/trip-details"
                sx={{ pr: 5, py: 1 }}
              >
                <ListItemIcon>
                  <MoreHorizIcon />
                </ListItemIcon>
                <ListItemText primary="Details" />
              </ListItemButton>
            )}
          </ListItem>

          <Divider />
          {menuList.map((item) => (
            <ListItem disablePadding key={item.text}>
              <ListItemButton
                sx={{ pr: 5, py: 1 }}
                onClick={item.text === "Log Out" ? doLogout : null}
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
