import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      email,
      password,
    };

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Card
          elevation={3}
          sx={{
            mt: 3,
            mb: 3,
            p: 1,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            color: "primary.main",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={process.env.PUBLIC_URL + "logo-cut.jpg"}
          />
          <Typography variant="h4" sx={{ m: 1 }}>
            <strong>Login</strong>
          </Typography>
        </Card>
      </Container>

      <Container maxWidth="xs">
        <Card
          elevation={3}
          sx={{
            p: 2,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></TextField>
              </Grid>
            </Grid>
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </Box>
          <Link component={RouterLink} to="/signup" underline="hover">
            fisrt time? click here to sign up
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
