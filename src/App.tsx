import { ThemeProvider } from "@material-ui/core";
import React from "react";
import HCardBuilder from "./pages/HCardBuilder";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HCardBuilder />
    </ThemeProvider>
  );
}

export default App;
