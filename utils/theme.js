import { createMuiTheme } from "@material-ui/core/styles";
import { SportsRugbySharp } from "@material-ui/icons";

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
});

export default theme;
