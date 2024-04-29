import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ADOPTION_CANCELLED,
  SERVER_ERROR,
} from "@/configs/user-feedback-config";
import { useAdoption } from "@/hooks/useAdoption";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

export default function CancelAdoptionDialog({ adoptionId, setAdoptions }) {
  const { adoptionCancel } = useAdoption();

  const handleAdoptionCancel = async () => {
    const res = await adoptionCancel(adoptionId);


    if (res.status === 201) {
      toast.info(ADOPTION_CANCELLED);

      setAdoptions((prev) =>
        prev.filter((adoption) => adoption.id !== adoptionId)
      );
    } else {
      toast.error(SERVER_ERROR);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-destructive hover:opacity-75 transition duration-200">
          Cancelar
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[550px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            ¿Seguro que deseas cancelar el proceso?
          </DialogTitle>
        </DialogHeader>
        <div className="pb-8 pt-6 text-[1em] space-y-4">
          <p>
            Entendemos que adoptar una mascota es una decisión importante y, a
            veces, las circunstancias pueden cambiar.
          </p>

          <p>
            Si decides que necesitas más tiempo para pensarlo o que no estás
            listo para adoptar, comprendemos y respetamos tu decisión.
          </p>
        </div>
        <DialogFooter className="flex items-center sm:justify-evenly w-full">
          <DialogClose asChild>
            <Button className="text-white bg-primary-dark hover:opacity-80 transition duration-200">
              Continuar con el proceso
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={handleAdoptionCancel}
              className="text-white bg-destructive hover:opacity-80 transition duration-200"
            >
              Cancelar adopción
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
