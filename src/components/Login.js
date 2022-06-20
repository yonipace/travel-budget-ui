import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            color: "primary.main",
          }}
        >
          <h2>Travel Budget Application</h2>
          <h3>Login</h3>
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
          <Link to="/login" underline="hover">
            fisrt time? click here to sign up
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
