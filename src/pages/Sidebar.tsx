import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarProvider } from "../components/ui/sidebar";

import { userImage } from "../images";
import useUserStore from "../store/userStore";

function SideBar({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { logout } = useUserStore();

  function handleLogout() {
    localStorage.removeItem("isLogged");
    logout();
    navigate("/login");
  }

  return (
    <div>
      <SidebarProvider>
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <div className="flex justify-center items-center">
              <img src={userImage} alt="user-image" className="rounded-full h-[120px] object-contain w-max mt-4" />
            </div>
            <h1 className="text-lg font-bold text-center">Bienvenido</h1>
            <p className="text-center text-sm text-slate-600">Armik</p>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="px-4">
              <div className="text-center mt-4">
                <p className="capitalize p-2">
                  {new Date().toLocaleDateString("es-ES", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
              <Button className="bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-900 mt-4" onClick={() => handleLogout()}>
                Salir
              </Button>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="p-4">{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default SideBar;
