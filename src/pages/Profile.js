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

const Profile = () => {
  const firstName = useSelector((state) => state.authentication.firstName);
  const lastName = useSelector((state) => state.authentication.lastName);
  const email = useSelector((state) => state.authentication.email);
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
            title={fullName}
            action={
              <IconButton>
                <EditIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Stack spacing={1}>
              <Typography>
                <strong>Email: </strong> {email}
              </Typography>

              <Typography>
                <strong>Trips: </strong>
              </Typography>
              <Stack spacing={1} mt={1}>
                {dummyTrips.map((trip) => (
                  <>
                    <Divider />
                    <Typography variant="body2">{trip}</Typography>
                  </>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

const dummyTrips = ["Rome 2022", "Barcelona 2021", "India 2023"];

export default Profile;
