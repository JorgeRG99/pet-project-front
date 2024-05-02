import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { Validator } from "@/utils/utility-classes/user-data-validator";
import { USER_VALIDATION_MESSAGES } from "@/configs/validation-config";
import { useUserValidation } from "@/hooks/useUserValidations";

function Register() {
  const { register } = useAuth();
  const { validateRegisterData } = useUserValidation();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    name: "",
    lastName: "",
    phone: "",
    dni: "",
    birthDate: "",
  });

  const [validationMessages, setValidationMessages] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const validationResult = validateRegisterData(registerData);
    const hasAnyError = Object.values(validationResult).some(
      (value) => value === false
    );

    if (hasAnyError) {
      const errorMessages = Validator.getValidationMessages(
        validationResult,
        USER_VALIDATION_MESSAGES
      );
      setValidationMessages(errorMessages);
      return;
    } else {
      setValidationMessages(null);
      const formattedRegisterData = convertKeysToSnakeCase(registerData);
      await register(formattedRegisterData);
    }
  };
  
  return (
    <main className="flex items-center justify-center w-full">
      <div className="w-full h-full my-16 flex flex-col items-center gap-8">
        <h1 className="text-3xl text-center font-semibold">
          Formulario de Registro
        </h1>
        <p>Porfavor rellene todos los campos</p>
        <div className="lg:w-[900px] w-[80%]">
          <form className="w-full grid lg:grid-cols-2 gap-4 grid-cols-1">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                type="text"
                name="name"
                placeholder="Nombre"
                className="mt-2 mb-4 py-5"
                onChange={handleInputChange}
                value={registerData.name}
                error={validationMessages?.name}
              />
            </div>
            <div>
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                className="mt-2 mb-4 py-5"
                onChange={handleInputChange}
                value={registerData.lastName}
                error={validationMessages?.lastName}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="mt-2 mb-4 py-5"
                value={registerData.email}
                onChange={handleInputChange}
                error={validationMessages?.email}
              />
            </div>
            <div>
              <Label htmlFor="contraseña">Contraseña</Label>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="mt-2 mb-4 py-5"
                value={registerData.password}
                onChange={handleInputChange}
                error={validationMessages?.password}
              />
            </div>
            <div>
              <Label htmlFor="DNI">DNI</Label>
              <Input
                type="text"
                name="dni"
                placeholder="DNI"
                className="mt-2 mb-4 py-5"
                value={registerData.dni}
                onChange={handleInputChange}
                error={validationMessages?.dni}
              />
            </div>
            <div className="row-start-5 lg:row-start-auto">
              <Label htmlFor="contraseña">Confirmar contraseña</Label>
              <Input
                type="password"
                name="confirmedPassword"
                placeholder="Contraseña"
                className="mt-2 mb-4 py-5"
                value={registerData.confirmedPassword}
                onChange={handleInputChange}
                error={validationMessages?.confirmedPassword}
              />
            </div>
            <div>
              <Label htmlFor="telefono">Telefono</Label>
              <Input
                type="number"
                name="phone"
                placeholder="Telefono"
                className="mt-2 mb-4 py-5"
                value={registerData.phone}
                onChange={handleInputChange}
                error={validationMessages?.phone}
              />
            </div>
            <div>
              <Label htmlFor="Fecha_nac">Fecha de nacimiento</Label>
              <Input
                type="date"
                name="birthDate"
                placeholder="Fecha de nacimiento"
                className="mt-2 mb-4 py-5"
                value={registerData.birthDate}
                onChange={handleInputChange}
                error={validationMessages?.birthDate}
              />
            </div>
          </form>
          <Button
            onClick={handleSubmit}
            className="w-full mt-8 bg-primary-dark text-primary-foreground hover:opacity-80 transition duration-200 active:scale-95"
          >
            Registrarse
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Register;
