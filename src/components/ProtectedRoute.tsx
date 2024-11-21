import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import SideBar from "../pages/Sidebar";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const isLogged = localStorage.getItem("isLogged") === "true";

  const { setIsLogged } = useUserStore();

  useEffect(() => {
    setIsLogged(isLogged);
  }, []);

  return isLogged ? <SideBar>{children}</SideBar> : <Navigate to="/login" />;
}

export default ProtectedRoute;
