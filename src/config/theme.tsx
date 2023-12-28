import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#457b9d",
      dark: "#1d3557",
      light: "#a8dadc",
    },
    secondary: {
      main: "#e63946",
    },
    text: {
      primary: "#000000",
      secondary: "#1e1e1e",
      disabled: "#434343",
    },
    background: {
      paper: "#ffffff",
      default: "#f1faee",
    },
    divider: "#525252",
  },
});

export default theme;
