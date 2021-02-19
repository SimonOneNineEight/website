import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#BFBFBF",
      transparent: "rgb(143, 143, 143, 0.8)",
    },
    secondary: {
      main: "rgba(31,119,195,1)",
      light: "rgba(156,193,228,1)",
      dark: "rgb(0, 48, 97)",
    },
    white: "rgba(255,255,255)",
    background: "rgb(0, 48, 97)",
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "LiHei Pro",
      "黑體-繁",
      "微軟正黑體",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: "bold",
    },
  },
});

export default theme;
