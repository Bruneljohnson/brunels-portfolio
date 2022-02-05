import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {props.children}
  </ThemeProvider>
);

export default Theme;
