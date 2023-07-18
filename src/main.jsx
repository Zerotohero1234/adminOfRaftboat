import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans Lao'
    ].join(','),
  },});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  </Provider>
  </ThemeProvider>
);
