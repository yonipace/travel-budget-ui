import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import React, { useState } from "react";

const ExpenseCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: "sm", my: 1 }}>
      <CardHeader
        title={props.data.title}
        subheader={props.data.note}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardActionArea onClick={() => setIsExpanded(!isExpanded)}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ p: 2 }}
        >
          <Typography>{props.data.date} </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              bgcolor: "secondary.main",
              p: 1,
              borderRadius: "15px",
            }}
          >
            {props.data.amount} ₪
          </Typography>
        </Stack>
      </CardActionArea>
      <Collapse in={isExpanded}>
        <CardContent>
          <Typography>Category: {props.data.category}</Typography>
          <Typography>Amount: {props.data.amount} </Typography>
          <Typography>Currency: {props.data.currency}</Typography>
          <Typography>User: {props.data.user}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpenseCard;
