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

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      firstName,
      lastName,
      email,
      password,
    };

    setFirstName("");
    setLastName("");
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
            <strong>Sign Up</strong>
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
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                ></TextField>
              </Grid>
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
              Sign Up
            </Button>
          </Box>
          <Link component={RouterLink} to="/login" underline="hover">
            Already have an account? click here to login
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
