import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Scroll_to_top from "./Components/UI/Scroll_to_top";
import AuthProvider from "./Contexts/AuthContext";
import CoursesProvider from "./Contexts/CoursesContext";
import GlobalLoadingProvider from "./Contexts/GlobalLoadingContext";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalLoadingProvider>
        <AuthProvider>
          <CoursesProvider>
            <Scroll_to_top />
            <App />
          </CoursesProvider>
        </AuthProvider>
      </GlobalLoadingProvider>
    </BrowserRouter>
  </StrictMode>,
);
