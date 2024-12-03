import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import "./App.css";

// Get the root element from your HTML
const rootElement = document.getElementById("root");

// Create a root and render the App component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);