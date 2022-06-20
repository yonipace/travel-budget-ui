import "./App.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserMainView from "./components/UserMainView";

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
      default: "#01A247",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserMainView />
    </ThemeProvider>
  );
};

export default App;
