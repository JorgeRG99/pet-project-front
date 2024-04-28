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
import { UserSessionContext } from "@/context/userSession";
import { useChangeEmail } from "@/hooks/useChangeEmail";
import { useUserValidation } from "@/hooks/useUserValidations";
import { Validator } from "@/utils/utility-classes/user-data-validator";
import { useContext, useState } from "react";

export default function ChangeEmailDialog() {
  const { userSession } = useContext(UserSessionContext);
  const [open, setOpen] = useState(false);
  const { validateEmail } = useUserValidation();
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const { changeEmail } = useChangeEmail();
  const [validationMessage, setValidationMessage] = useState();
  const isUpdated = password !== "" && newEmail !== "";

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNewEmailChange = (e) => setNewEmail(e.target.value);

  const handleEmailUpdate = async () => {
    if(userSession.email === newEmail) {
        setValidationMessage({ email: "El nuevo correo electrónico no puede ser igual al anterior." })
        return
    }
    setValidationMessage(null);
    const validationResult = validateEmail(newEmail);
    const hasError = !validationResult.email;

    if (hasError) {
      const errorMessages = Validator.getValidationMessages(
        validationResult,
        USER_VALIDATION_MESSAGES
      );
      setValidationMessage(errorMessages);
      return;
    } else {
      await changeEmail({
        password,
        email: newEmail,
      });

      setOpen(false);
      setNewEmail("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-gray-600 hover:bg-gray-200 w-full py-4 text-sm">
          Cambiar correo electrónico
        </button>
      </DialogTrigger>
      <DialogContent className="sm:w-[550px] w-[90%] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            ¡Atención!
          </DialogTitle>
          <DialogDescription className="text-black text-[1.2em] text-center">
            Estás a punto cambiar tu correo electrónico
          </DialogDescription>
        </DialogHeader>
        <div className="py-8 text-[1em] space-y-6">
          <p>
            Esta es una operación irreversible y como medida de seguridad
            deberas introducir tu contraseña.
          </p>

          <div>
            <Label htmlFor="password">Introduce tu contraseña</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
              className="mt-2 mb-4 rounded-lg p-5 px-3 w-full border border-gray-300"
            />
            <Label htmlFor="email">Nuevo correo electrónico</Label>
            <Input
              type="email"
              name="email"
              value={newEmail}
              onChange={handleNewEmailChange}
              error={validationMessage?.email}
              placeholder="Nueva correo electrónico"
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
            onClick={handleEmailUpdate}
            className="text-white bg-destructive"
          >
            Cambiar correo electrónico
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
