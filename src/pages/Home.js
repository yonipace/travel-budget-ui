import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Container>
        <Card
          elevation={3}
          sx={{
            maxWidth: 400,
            my: 2,
            p: 1,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            color: "primary.main",
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={process.env.PUBLIC_URL + "travel-logo-min.png"}
            sx={{ borderRadius: "10px" }}
          />

          <CardContent>
            <Typography>
              <strong> Welcome!</strong> What would you like to do?
            </Typography>
            <Stack
              alignItems="center"
              spacing={2}
              direction="row"
              justifyContent="space-evenly"
              mt={2}
            >
              <Button variant="contained" component={RouterLink} to="/login">
                Login
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="contained">Sign Up</Button>
              <Divider orientation="vertical" flexItem />

              <Button variant="contained">Demo</Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
