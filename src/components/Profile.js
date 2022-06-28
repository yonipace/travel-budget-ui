import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuDrawer from "./MenuDrawer";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  return (
    <div>
      <AppBar sx={{ bgcolor: "primary.dark" }}>
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" sx={{ mx: 1 }}>
            Yonatan Pace
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 10 }}>
        <Card>
          <CardHeader
            title="Yonatan Pace"
            action={
              <IconButton>
                <EditIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="h6">Email: yonatan@email.com</Typography>
            <Typography variant="h6">Trips: </Typography>
            <Typography>Rome 2022</Typography>
            <Typography>Barcelona 2022</Typography>
            <Typography>India 2022</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
