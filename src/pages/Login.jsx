import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { convertKeysToSnakeCase } from "@/utils/utility-js/fetchKeysFormat";

export default function Login() {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedLoginCredentials = convertKeysToSnakeCase(credentials)
    login(formattedLoginCredentials)
  };

  return (
    <main className="flex h-screen w-full">
      <div className="container h-full flex flex-col gap-8 justify-center items-center md:w-[500px]">
        <h1 className="text-4xl font-semibold mb-4">Iniciar Sesión</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="mt-2 mb-4 rounded-lg p-5 w-full border border-gray-300"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
              className="mt-2 mb-4 rounded-lg p-5 w-full border border-gray-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-6 bg-primary-dark text-primary-foreground hover:bg-primary transition duration-300"
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
      <img
        className="max-h-full w-auto hidden lg:flex"
        src="https://images.pexels.com/photos/5255249/pexels-photo-5255249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Login Image"
      />
    </main>
  );
}
