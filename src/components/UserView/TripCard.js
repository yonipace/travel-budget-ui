import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { update } from "../../reducers/tripSlice";
import { useHistory } from "react-router-dom";

const TripCard = (props) => {
  const dispatch = useDispatch();
  const updateReduxTrip = (trip) => {
    dispatch(update(trip));
  };
  const history = useHistory();

  const dates = props.data.startDate + " - " + props.data.endDate;

  return (
    <Card sx={{ maxWidth: "sm", my: 1 }}>
      <CardActionArea
        onClick={() => {
          updateReduxTrip(props.data);
          history.push("/trip");
        }}
      >
        <CardHeader
          title={props.data.name}
          subheader={dates}
          sx={{
            color: "primary.main",
            mb: -2,
          }}
        />

        <CardContent>
          <Typography component="div">
            <strong> Budget:</strong> {500}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Typography component="div">
              <strong> Remaining:</strong> {500}
            </Typography>
            <Typography component="div">
              <strong> Spent:</strong> {500}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              p: 0.5,
              my: 1,
              borderRadius: "10px",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TripCard;
