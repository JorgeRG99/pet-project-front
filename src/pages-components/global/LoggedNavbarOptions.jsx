import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { useAuth } from "@/hooks/useAuth";
import { Danger } from "@/icons/Danger";
import { Link } from "react-router-dom";

export default function LoggedNavbarOptions() {
  const { logout } = useAuth();

  return (
    <section className="flex items-center space-x-4 hover:">
        <Link to={PAGES_URLS.profile}>
        <Button className="text-white bg-primary-dark hover:bg-primary">Perfil</Button>
        </Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-white bg-destructive hover:opacity-70 transition duration-300">Salir</Button>
        </DialogTrigger>
        <DialogContent className="w-[350px] bg-white">
          <DialogHeader>
            <DialogTitle className="flex justify-start items-center gap-[75px]">
              <Danger />
              <p className="text-2xl">¡Atención!</p>
            </DialogTitle>
          </DialogHeader>
          <div className="py-8 text-[1.2em] text-center">
            Estás a punto de cerrar sesión. ¿Quieres continuar?
          </div>
          <DialogFooter className="flex items-center sm:justify-evenly w-full">
            <DialogTrigger asChild>
              <Button className="text-white bg-primary-dark">Continuar</Button>
            </DialogTrigger>
            <Button onClick={logout} className="text-white bg-destructive">
              Cerrar sesión
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
