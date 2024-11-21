import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.routes";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={routes}
    />
    <Toaster position="top-center" />
  </StrictMode>
);
