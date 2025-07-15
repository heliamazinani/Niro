import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Loader from "./components/Loader";
import { ThemeProvider } from "./components/ThemeContext";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(

  <ThemeProvider>

        <App />

  </ThemeProvider>
 
);
