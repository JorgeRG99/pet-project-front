import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { Danger } from "@/icons/Danger";

export default function LogoutDialog({ setOpen }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setOpen(false);
  };

  return (
    <Dialog onClick={() => setOpen(false)}>
      <DialogTrigger asChild>
        <Button className="text-white bg-destructive hover:opacity-70 transition duration-300 active:scale-90">
          Salir
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[350px] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex justify-start items-center gap-[75px]">
            <Danger />
            <p className="text-2xl">¡Atención!</p>
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 text-[1.2em] text-center">
          Estás a punto de cerrar sesión. ¿Quieres continuar?
        </div>
        <DialogFooter className="flex flex-row items-center sm:justify-evenly justify-evenly w-full">
          <DialogTrigger asChild>
            <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95">
              Continuar
            </Button>
          </DialogTrigger>
          <Button
            onClick={handleLogout}
            className="text-white bg-destructive hover:opacity-75 transition duration-200 active:scale-95"
          >
            Cerrar sesión
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
