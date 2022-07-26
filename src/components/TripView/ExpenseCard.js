import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlightIcon from "@mui/icons-material/Flight";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { blue, green, orange, purple, red, yellow } from "@mui/material/colors";
import UpdateExpense from "./UpdateExpense";
import DeleteExpense from "./DeleteExpense";

const avatarColors = {
  electricity: yellow[700],
  restaurant: red[700],
  vacation: orange[700],
  food: blue[700],
  hotel: green[700],
  cars: purple[700],
};

const categoryAvatars = {
  food: {
    color: blue[700],
    icon: <FastfoodIcon />,
  },
  restaurant: {
    color: red[700],
    icon: <RestaurantIcon />,
  },
  hotel: {
    color: yellow[700],
    icon: <HotelIcon />,
  },
  flight: {
    color: orange[700],
    icon: <FlightIcon />,
  },
  tickets: {
    color: purple[700],
    icon: <FlightIcon />,
  },
};

const ExpenseCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: "sm", my: 1 }}>
      <CardActionArea
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor:
                  categoryAvatars[props.data.category.toLowerCase()].color,
                color: "white",
              }}
            >
              {categoryAvatars[props.data.category.toLowerCase()].icon}
            </Avatar>
          }
          title={props.data.title}
          subheader={props.data.category.toLowerCase()}
          action={
            <Typography
              variant="h6"
              sx={{
                color: "white",
                bgcolor: "secondary.main",
                px: 2,
                py: 0.5,
                borderRadius: "30px",
                m: 1,
              }}
            >
              {props.data.amount} ₪
            </Typography>
          }
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ mx: 2, my: 1 }}
        >
          <Typography>{props.data.date}</Typography>

          {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Stack>
      </CardActionArea>

      <Collapse in={isExpanded}>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <CardContent>
            <Typography variant="subtitle1">{props.data.note}</Typography>
            <Typography variant="subtitle2">
              Amount: {props.data.localAmount}
            </Typography>
            <Typography variant="subtitle2">
              Currency: {props.data.localCurrencyCode}
            </Typography>
            <Typography variant="subtitle2">User: {props.data.user}</Typography>
          </CardContent>
          <CardActions>
            <UpdateExpense expense={props.data} onClose={props.onClose} />
            <DeleteExpense expense={props.data} onClose={props.onClose} />
          </CardActions>
        </Stack>
      </Collapse>
    </Card>
  );
};

export default ExpenseCard;
