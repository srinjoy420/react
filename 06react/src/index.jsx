import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot on the DOM element
root.render(<App />);