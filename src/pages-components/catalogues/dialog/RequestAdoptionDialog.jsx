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
import { ADOPTION_DIALOG } from "@/configs/content-config";
import { useAdoption } from "@/hooks/useAdoption";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";

export default function RequestAdoptionDialog({ petId, petName }) {
  const { adopt } = useAdoption();

  const handleAdoptionRequest = () => adopt(convertKeysToSnakeCase({ petId }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-dark text-white w-full transition durartion-300 hover:bg-primary">
          Solicitar adopcion
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[650px] w-[90%] max-w-screen bg-white rounded-lg overflow-scroll">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center text-center text-2xl">
            ¿Quieres solicitar la adopcion de {petName}?
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 px-4 space-y-6">
          <h3>{ADOPTION_DIALOG.title}</h3>

          <div className="space-y-2">
            <h4 className="font-semibold">{ADOPTION_DIALOG.step1.title}</h4>
            <p>{ADOPTION_DIALOG.step1.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">{ADOPTION_DIALOG.step2.title}</h4>
            <p>{ADOPTION_DIALOG.step2.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">{ADOPTION_DIALOG.step3.title}</h4>
            <p>{ADOPTION_DIALOG.step3.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">{ADOPTION_DIALOG.step4.title}</h4>
            <p>{ADOPTION_DIALOG.step4.description}</p>
          </div>
        </div>
        <DialogFooter className="flex flex-row items-center sm:justify-evenly justify-evenly w-full">
          <DialogClose asChild>
            <Button className="text-white bg-destructive hover:opacity-75 transition duration-200">
              Prefiero no hacerlo
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={handleAdoptionRequest}
              className="text-white bg-primary-dark hover:opacity-75 transition duration-200"
            >
              Quiero adoptar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
