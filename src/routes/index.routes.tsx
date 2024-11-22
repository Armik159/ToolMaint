import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import BloqueTrabajo from "../pages/BloqueTrabajo";
import Detalle from "../pages/Detalle";
import HerramientasAsignadas from "../pages/HerramientasAsignadas";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/bloqueTrabajo",
      element: (
        <ProtectedRoute>
          <BloqueTrabajo />
        </ProtectedRoute>
      ),
    },
    {
      path: "/detalle",
      element: (
        <ProtectedRoute>
          <Detalle />
        </ProtectedRoute>
      ),
    },
    {
      path: "/herramientasAsignadas",
      element: (
        <ProtectedRoute>
          <HerramientasAsignadas />
        </ProtectedRoute>
      ),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);

export default routes;
