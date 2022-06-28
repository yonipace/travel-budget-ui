import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

const TripCard = (props) => {
  return (
    <Card sx={{ maxWidth: "sm", my: 1 }}>
      <CardActionArea onClick={() => {}}>
        <CardHeader
          title={props.data.name}
          subheader={props.data.destination}
          sx={{
            color: "primary.main",
          }}
        />

        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Stack justifyContent="center" alignItems="flex-start">
              <Typography variant="subtitle1">
                budget: <strong>{props.data.budget}</strong>
              </Typography>
              <Typography variant="subtitle1">
                spent: <strong>{props.data.totalSpent}</strong>
              </Typography>
            </Stack>
            <Typography variant="subtitle2">
              {props.data.startDate} - {props.data.endDate}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TripCard;
