import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Stack,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container sx={{ my: 2 }}>
        <Card sx={{ maxWidth: 500, p: 1 }}>
          <CardMedia
            component="img"
            height="400"
            image={process.env.PUBLIC_URL + "travel-logo-min.png"}
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Stack
              alignItems="center"
              spacing={2}
              direction="row"
              justifyContent="space-evenly"
              my={2}
            >
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to="/login"
              >
                Login
              </Button>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to="/signup"
              >
                Sign Up
              </Button>
            </Stack>
            <Stack
              alignItems="center"
              spacing={2}
              direction="row"
              justifyContent="space-evenly"
            >
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to="/user"
              >
                User Main
              </Button>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to="/trip"
              >
                Trip Main
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
