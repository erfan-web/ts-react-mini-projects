import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Clouds from "./components/Clouds.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <>
    <Clouds /> 
    <App />
  </>,
  // </StrictMode>,
);
