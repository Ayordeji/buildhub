// src/main.jsx
import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // ReactDOM for rendering
import { BrowserRouter } from "react-router-dom"; // Router wrapper
import App from "./App"; // Import main App component
import "./index.css"; // Import Tailwind CSS

// Create root React element and render App wrapped in BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/buildhub">
  <App />
</BrowserRouter>

  </React.StrictMode>
);
