import {
  AppBar,
  Card,
  LinearProgress,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuDrawer from "../Layout/MenuDrawer";

const TripAppBar = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <MenuDrawer />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {props.trip.name}
        </Typography>
      </Toolbar>

      <Card
        sx={{
          mx: 2,
          p: 1,
          borderWidth: 1,
        }}
      >
        <Typography component="div" sx={{ mx: 2 }}>
          <strong> Budget:</strong> {props.trip.budget}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          mx={2}
        >
          <Typography component="div">
            <strong> Remaining: </strong>
            {props.trip.budget - props.trip.totalSpent}
          </Typography>
          <Typography component="div">
            <strong> Spent:</strong> {props.trip.totalSpent}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{ mx: 2, my: 1, p: 0.5, borderRadius: "15px" }}
        />
      </Card>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mx={2}
        my={1}
      >
        <Typography variant="body2"> {props.trip.destination}</Typography>
        <Typography variant="body2">
          {props.trip.startDate}-{props.trip.endDate}
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default TripAppBar;
