import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePets } from "@/hooks/usePets";
import Delete from "@/icons/Delete";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function DeletePetDialog({ pet, setPets }) {
  const { petDelete } = usePets();

  const handlePetDelete = async () => await petDelete(pet?.id, setPets);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-destructive hover:opacity-75 transition duration-200 w-[50px] active:scale-95">
          <Delete />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[450px] rounded-lg w-[90%] bg-white">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl">
            ¡Atención!
          </DialogTitle>
          <DialogDescription className="text-black text-[1.2em] text-center">
            Estás a punto eliminar una mascota
          </DialogDescription>
        </DialogHeader>
        <div className="py-6 text-center">
          <p>Esta es una operación irreversible</p>
          <p>¿Estás seguro de que quieres continuar?</p>
        </div>

        <DialogFooter className="flex flex-row items-center sm:justify-evenly justify-evenly w-full">
          <DialogTrigger asChild>
            <Button className="text-white hover:opacity-75 transition duration-200 bg-primary-dark">
              Cerrar
            </Button>
          </DialogTrigger>
          <Button
            onClick={handlePetDelete}
            className="text-white hover:opacity-75 transition duration-200 bg-destructive"
          >
            Eliminar mascota
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
