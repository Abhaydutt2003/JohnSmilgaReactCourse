import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./constext";
import './style.css';
//hate prop drilling,use global context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
