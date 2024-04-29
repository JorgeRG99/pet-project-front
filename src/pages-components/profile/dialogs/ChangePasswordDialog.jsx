import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { USER_VALIDATION_MESSAGES } from "@/configs/validation-config";
import { useChangePassword } from "@/hooks/useChangePassword";
import { useUserValidation } from "@/hooks/useUserValidations";
import { Validator } from "@/utils/utility-classes/user-data-validator";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { useState } from "react";

export default function ChangePasswordDialog() {
  const [open, setOpen] = useState(false);
  const { validatePassword } = useUserValidation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { changePassword } = useChangePassword();
  const [validationMessage, setValidationMessage] = useState();
  const isUpdated = newPassword !== "";

  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const handlePasswordUpdate = async () => {
    if (newPassword === currentPassword) {
      setValidationMessage({
        password: "La nueva contraseña no puede ser igual a la anterior.",
      });
      return;
    }

    setValidationMessage(null);
    const validationResult = validatePassword(newPassword);
    const hasError = !validationResult.password;

    if (hasError) {
      const errorMessages = Validator.getValidationMessages(
        validationResult,
        USER_VALIDATION_MESSAGES
      );
      setValidationMessage(errorMessages);
      return;
    } else {
      const formattedData = convertKeysToSnakeCase({
        currentPassword,
        newPassword,
      });
      await changePassword(formattedData);
      setOpen(false);

      setCurrentPassword("");
      setNewPassword("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-gray-600 hover:bg-gray-200 w-full py-4 text-sm">
          Cambiar contraseña
        </button>
      </DialogTrigger>
      <DialogContent className="sm:w-[550px] w-[90%] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            ¡Atención!
          </DialogTitle>
          <DialogDescription className="text-black text-[1.2em] text-center">
            Estás a punto cambiar tu contraseña
          </DialogDescription>
        </DialogHeader>
        <div className="py-8 text-[1em] space-y-6">
          <p>
            Esta es una operación irreversible y como medida de seguridad
            deberas introducir tu contraseña.
          </p>

          <div>
            <Label htmlFor="current-password">Contraseña actual</Label>
            <Input
              type="password"
              name="current-password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              placeholder="Contraseña actual"
              className="mt-2 mb-4 rounded-lg p-5 px-3 w-full border border-gray-300"
            />
            <Label htmlFor="current-password">Nueva contraseña</Label>
            <Input
              type="password"
              name="current-password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              error={validationMessage?.password}
              placeholder="Nueva contraseña"
              className="mt-2 mb-4 rounded-lg p-5 px-3 w-full border border-gray-300"
            />
          </div>
        </div>
        <DialogFooter className="flex items-center sm:justify-evenly w-full sm:gap-0 gap-4">
          <DialogClose asChild>
            <Button className="text-white bg-primary-dark">
              No deseo continuar
            </Button>
          </DialogClose>
          <Button
            disabled={!isUpdated}
            onClick={handlePasswordUpdate}
            className="text-white bg-destructive"
          >
            Cambiar contraseña
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
