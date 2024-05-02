import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ADOPTION_ACCEPTED,
  ADOPTION_CANCELLED,
  SERVER_ERROR,
} from "@/configs/user-feedback-config";
import { useAdoption } from "@/hooks/useAdoption";
import Check from "@/icons/Check";
import Pending from "@/icons/Pending";
import { toast } from "sonner";

export default function ManageAdoptionDialog({
  status,
  adoptionId,
  setAdoptions,
}) {
  const nexStepButtonText = status === "pending" ? "Aceptar" : "Confirmar";
  const { adoptionAccept, adoptionConfirm, adoptionCancel } = useAdoption();

  const handleAdoptionAccept = async () => {
    let res;
    if (status === "pending") {
      res = await adoptionAccept(adoptionId);
    } else if (status === "accepted") {
      res = await adoptionConfirm(adoptionId);
    }

    if (res.status === 201) {
      toast.info(ADOPTION_ACCEPTED);

      setAdoptions((prevStatus) => {
        let adoption = prevStatus.find((adoption) => adoption.id === adoptionId);
        const filteredAdoptions = prevStatus.filter((adoption) => adoption.id !== adoptionId);

        if (status === "pending") adoption.status = "accepted";
        else if (status === "accepted") adoption.status = "confirmed";

        return [
          ...filteredAdoptions,
          adoption,
        ]
      });
    } else {
      toast.error(SERVER_ERROR);
    }
  };

  const handleAdoptionCancel = async () => {
    const res = await adoptionCancel(adoptionId);

    if (res.status === 201) {
      toast.info(ADOPTION_CANCELLED);

      setAdoptions((prevStatus) => {
        let adoption = prevStatus.find((adoption) => adoption.id === adoptionId);
        const filteredAdoptions = prevStatus.filter((adoption) => adoption.id !== adoptionId);

        adoption.status = "cancelled";

        return [
          ...filteredAdoptions,
          adoption,
        ]
      });
    } else {
      toast.error(SERVER_ERROR);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={status === "confirmed" || status === "cancelled"} className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95">
          Gestionar
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[450px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Gestionar adopcion
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-16">
          <div className="space-y-4 py-3">
            <h3 className="text-[1.2em] font-semibold">Proceso</h3>

            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <Check />
                <p className="font-medium">Solicitada</p>
              </div>
              <div className="flex gap-3 items-center">
                {status === "accepted" || status === "confirmed" ? <Check /> : <Pending />}
                <p className="font-medium">Aceptada</p>
              </div>
              <div className="flex gap-3 items-center">
                {status === "confirmed" ? <Check /> : <Pending />}{" "}
                <p className="font-medium">Confirmada</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/2">
            <Button
              onClick={handleAdoptionAccept}
              className="text-white bg-primary-dark hover:opacity-75 transition duration-200 w-full"
            >
              {nexStepButtonText}
            </Button>
            <Button
              onClick={handleAdoptionCancel}
              className="text-white bg-destructive hover:opacity-75 transition duration-200 w-full"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
