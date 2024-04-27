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
import ChangePasswordDialog from "./ChangePasswordDialog";
import EditProfileDialog from "./EditProfileDialog";

export default function EditProfileOptionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-primary-dark hover:opacity-90">
          Editar Perfil
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px] bg-white px-0">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            Editar Perfil
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm text-center">
            Aquí puedes actualizar la información de tu perfil.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex sm:space-x-0 sm:flex-col items-center w-full">
          <DialogClose  asChild>
            <EditProfileDialog />
          </DialogClose>
          <DialogClose asChild>
            <ChangePasswordDialog />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
