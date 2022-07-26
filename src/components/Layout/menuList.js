import FlightIcon from "@mui/icons-material/Flight";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const menuList = [
  { text: "Trips", icon: <FlightIcon />, link: "/user", action: null },
  {
    text: "Profile",
    icon: <AccountCircleIcon />,
    link: "/profile",
    action: null,
  },
  { text: "Log Out", icon: <LogoutIcon />, link: "/login", action: null },
];
