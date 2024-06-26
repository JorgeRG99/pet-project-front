import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChangePasswordDialog from "./ChangePasswordDialog";
import EditProfileDialog from "./EditProfileDialog";
import ChangeEmailDialog from "./ChangeEmailDialog";

export default function EditProfileOptionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-primary-dark hover:opacity-90 transition duration-200 active:scale-95">
          Editar Perfil
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[350px] w-[90%] bg-white px-0 rounded-lg">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            Editar Perfil
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex sm:space-x-0 sm:flex-col items-center w-full">
          <EditProfileDialog />
          <ChangePasswordDialog />
          <ChangeEmailDialog />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
