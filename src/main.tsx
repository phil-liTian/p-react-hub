/*
 * @Author: phil
 * @Date: 2025-07-23 17:05:46
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import './style/index.less'
import "../src/assets/less/index.less";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/p-react-hub/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
