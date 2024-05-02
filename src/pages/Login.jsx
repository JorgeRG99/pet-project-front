import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { Link } from "react-router-dom";
import { PAGES_URLS } from "@/configs/app-routes-config";

export default function Login() {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRememberChange = (event) => setRemember(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedLoginCredentials = convertKeysToSnakeCase(credentials);
    login(formattedLoginCredentials, remember);
  };

  return (
    <main className="flex lg:h-screen h-[80vh] w-full">
      <div className="container h-full flex flex-col gap-8 justify-center items-center md:w-[500px] lg:pb-20 pb-0">
        <h1 className="text-4xl font-semibold mb-4">Iniciar Sesión</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="mt-2 mb-4 rounded-lg p-5 px-3 w-full border border-gray-300"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
              className="mt-2 mb-4 rounded-lg p-5 px-3 w-full border border-gray-300"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="remember"
              value={remember}
              onChange={handleRememberChange}
            />
            <Label htmlFor="remember">Mantener sesión iniciada</Label>
          </div>
          <Button
            type="submit"
            className="w-full mt-6 bg-primary-dark text-primary-foreground hover:opacity-80 transition duration-200 active:scale-95"
          >
            Iniciar Sesión
          </Button>
        </form>
        <p className="text-sm font-light text-gray-800">
          ¿No tienes cuenta?{" "}
          <Link
            to={PAGES_URLS.register}
            className="font-medium text-primary-600 hover:underline text-blue-500"
          >
            Registrate
          </Link>
        </p>
      </div>
      <img
        className="max-h-full w-auto hidden lg:flex"
        src="./images/login/login.webp"
        alt="Login Image"
      />
    </main>
  );
}
