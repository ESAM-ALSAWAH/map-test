import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  direction: 'ltr',
  typography,
  palette: {
    primary: {
      main: '#424649'
    }
  }
});
export default theme;
