import "./App.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./pages/Routes";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#01A247",
    },
    secondary: {
      main: "#F04B19",
    },
    background: {
      default: "#d5d5d5",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
