import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore: allow CSS side-effect import when no type declarations are available
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
