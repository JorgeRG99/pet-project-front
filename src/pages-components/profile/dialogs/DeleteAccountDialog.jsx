import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDeleteUser } from "@/hooks/useDeleteUser";
import { useState } from "react";

export default function DeleteAccountDialog() {
  const [password, setPassword] = useState("");
  const { deleteUser } = useDeleteUser();

  const handleChange = (e) => setPassword(e.target.value);
  const handleDelete = () => deleteUser(password);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-destructive hover:opacity-90 active:scale-95 transition duration-200">
          Eliminar cuenta
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[550px] bg-white">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            ¡Atención!
          </DialogTitle>
          <DialogDescription className="text-black text-[1.2em] text-center">
            Estás a punto eliminar tu cuenta
          </DialogDescription>
        </DialogHeader>
        <div className="py-8 text-[1em] space-y-6">
          <p>
            Esta es una operación irreversible. Si quieres continuar introduce
            tu contraseña
          </p>

          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="mt-2 mb-4 rounded-lg p-5 px-3 w-full border border-gray-300"
          />
        </div>
        <DialogFooter className="flex items-center sm:justify-evenly w-full">
          <DialogTrigger asChild>
            <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95">
              No deseo continuar
            </Button>
          </DialogTrigger>
          <Button onClick={handleDelete} className="text-white bg-destructive hover:opacity-75 transition duration-200 active:scale-95">
            Eliminar cuenta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
