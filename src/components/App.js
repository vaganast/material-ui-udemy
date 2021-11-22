import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./ui/Theme";

import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/"  />
          <Route exact path="/services"  />
          <Route exact path="/customsoftware"  />
          <Route exact path="/mobileapps"  />
          <Route exact path="/websites"  />
          <Route exact path="/revolution"  />
          <Route exact path="/about"  />
          <Route exact path="/contact"  />
          <Route exact path="/estimate" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
