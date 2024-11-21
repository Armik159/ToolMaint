import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { user } from "../constants/user";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    console.log(username, password);

    event.preventDefault();
    // Handle login logic here
    if (username === user.user && password === user.password) {
      // Redirect to home page
      localStorage.setItem("isLogged", "true");
      navigate("/");
    } else {
      toast.error("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <CardHeader>
          <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-4xl text-center mb-4">Acceso</h1>
          <p className="text-sm text-slate-500 text-center">Ingresa tus credenciales para poder acceder</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Usuario
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </label>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Contraseña
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </label>
            </div>
            <Button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Ingresar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
