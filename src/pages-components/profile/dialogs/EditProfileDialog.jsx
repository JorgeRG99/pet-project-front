import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { USER_VALIDATION_MESSAGES } from "@/configs/validation-config";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useUserValidation } from "@/hooks/useUserValidations";
import { Validator } from "@/utils/utility-classes/user-data-validator";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { useState } from "react";

export default function EditProfileDialog() {
  const [open, setOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState();
  const { validateUserUpdate } = useUserValidation();
  const [validationMessages, setValidationMessages] = useState({});
  const { updateUser } = useUpdateUser();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const validationResult = validateUserUpdate(updatedData);
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
      const formattedUpdatedData = convertKeysToSnakeCase(updatedData);
      await updateUser(formattedUpdatedData);
      setUpdatedData(null)
      setOpen(false)
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-gray-600 hover:bg-gray-200 w-full py-4 text-sm">
          Actualizar información de personal
        </button>
      </DialogTrigger>
      <DialogContent className="w-[550px] bg-white">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            Actualizar información de personal
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 text-[1em] space-y-6">
          <div>
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              className="mt-2 mb-4 py-5"
              onChange={handleInputChange}
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
              error={validationMessages?.lastName}
            />
          </div>
          <div>
            <Label htmlFor="DNI">DNI</Label>
            <Input
              type="text"
              name="dni"
              placeholder="DNI"
              className="mt-2 mb-4 py-5"
              onChange={handleInputChange}
              error={validationMessages?.dni}
            />
          </div>
          <div>
            <Label htmlFor="telefono">Telefono</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Telefono"
              className="mt-2 mb-4 py-5"
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
              onChange={handleInputChange}
              error={validationMessages?.birthDate}
            />
          </div>
        </div>
        <DialogFooter className="flex items-center sm:justify-evenly w-full">
          <DialogClose asChild>
            <Button className="text-primary-dark bg-primary-extra-light hover:bg-primary duration-200 transition">
              No deseo continuar
            </Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
            className="text-white bg-primary-dark hover:opacity-70 duration-200 transition"
          >
            Actualizar Perfil
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
