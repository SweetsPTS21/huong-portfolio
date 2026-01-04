import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PortfolioV2 from "./AppV2.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <PortfolioV2 />
    </StrictMode>
);
