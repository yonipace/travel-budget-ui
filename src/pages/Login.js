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
import { useRef } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authSlice";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { error, sendRequest: sendLogin } = useFetch();
  const dispatch = useDispatch();
  const setAuthData = (response) => {
    dispatch(login(response));
  };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    sendLogin(
      {
        url: "http://localhost:8080/login",
        body: JSON.stringify(user),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      setAuthData
    );
    history.push("/user");
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Card
          elevation={3}
          sx={{
            mt: 3,
            mb: 3,
            p: 2,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            color: "primary.main",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={process.env.PUBLIC_URL + "travel-logo-min.png"}
            sx={{ borderRadius: "10px" }}
          />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              py: 3,
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
                  inputRef={emailRef}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  inputRef={passwordRef}
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
