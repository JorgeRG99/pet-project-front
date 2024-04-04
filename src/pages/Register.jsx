import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
function Register() {
  return (
    <main className="flex items-center justify-center w-full">
      <div className="grid w-full h-full grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Formulario de Registro</h1>
          </div>
          <form className="w-[80%]">
            <Label htmlFor="nombre">Nombre</Label>
            <Input type="text" id="nombre" placeholder="Nombre" className="mt-2 mb-4 rounded-full" />
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input type="text" id="Apellidos" placeholder="Apellidos" className="mt-2 mb-4 rounded-full" />
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="Email" placeholder="Email" className="mt-2 mb-4 rounded-full" />
            <Label htmlFor="contraseña">Contraseña</Label>
            <Input type="password" id="Contraseña" placeholder="Contraseña" className="mt-2 mb-4 rounded-full" />
            <Label htmlFor="DNI">DNI</Label>
            <Input type="text" id="DNI" placeholder="DNI" className="mt-2 mb-4 rounded-full" />
            <Label htmlFor="telefono">Telefono</Label>
            <Input type="number" id="Telefono" placeholder="Telefono" className="mt-2 mb-4 rounded-full" />
            <Label htmlFor="Fecha_nac">Fecha de nacimiento</Label>
            <Input type="date" id="Fecha_nac" placeholder="Fecha de nacimiento" className="mt-2 mb-4 rounded-full" />

            <Button type="submit" className="w-full mt-6 rounded-full">Registrarse</Button>
          </form>
        </div>
        <div className="relative hidden md:block">
          <img className="w-full" src="https://images.pexels.com/photos/7210698/pexels-photo-7210698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Register Image" />
        </div>
      </div>
    </main>
  )
}

export default Register