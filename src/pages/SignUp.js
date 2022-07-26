import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authSlice";
import useFetch from "../hooks/useFetch";

const SignUp = () => {
  const { error, loading, sendRequest: signup } = useFetch();
  const dispatch = useDispatch();
  const setAuthData = (response) => {
    dispatch(login(response));
  };
  const history = useHistory();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(user);

    signup(
      {
        url: "http://localhost:8080/signup",
        body: JSON.stringify(user),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      setAuthData,
      history.push("/user")
    );
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Card
          elevation={3}
          sx={{
            p: 2,
            my: 2,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
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
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  inputRef={firstNameRef}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  inputRef={lastNameRef}
                ></TextField>
              </Grid>
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
              {loading ? "loading..." : "Sign Up"}
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
