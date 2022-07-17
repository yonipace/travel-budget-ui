import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";

export const categories = [
  {
    enum: "FOOD",
    value: "Food",
    icon: <FastfoodIcon />,
  },
  {
    enum: "HOTEL",
    value: "Hotel",
    icon: <HotelIcon />,
  },
  {
    enum: "RESTAURANT",
    value: "Restaurant",
    icon: <RestaurantIcon />,
  },
];
