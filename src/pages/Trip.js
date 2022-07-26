import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuDrawer from "../components/Layout/MenuDrawer";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

const Trip = () => {
  const trip = useSelector((state) => state.trip.trip);
  const firstName = useSelector((state) => state.authentication.firstName);
  const lastName = useSelector((state) => state.authentication.lastName);
  const fullName = firstName + " " + lastName;
  return (
    <div>
      <AppBar>
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" sx={{ mx: 1 }}>
            {fullName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 10 }}>
        <Card>
          <CardHeader
            title={trip.name}
            action={
              <IconButton>
                <EditIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Stack spacing={1}>
              <Typography>
                <strong>Destination: </strong> {trip.destination}
              </Typography>
              <Typography>
                <strong>Currency: </strong> {trip.currency}
              </Typography>
              <Typography>
                <strong>Budget: </strong> {trip.budget}
              </Typography>
              <Typography>
                <strong>Total Spent: </strong> {trip.totalSpent}
              </Typography>

              <Typography>
                <strong>Users: </strong>
              </Typography>
              <Stack spacing={1} mt={1}></Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Trip;
