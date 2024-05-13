import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useBookings } from "@/hooks/useBookings";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";

export default function CancelBookingDialog({ booking, setBookings, pet }) {
  const { bookingDelete } = useBookings(setBookings);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    await bookingDelete(booking.id, setBookings);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-white bg-destructive hover:opacity-75 transition duration-200 active:scale-95">
          Cancelar reserva
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[450px] rounded-lg w-[90%] bg-white">
        <DialogHeader>
          <DialogTitle className=" text-center text-xl">
            Estás a punto cancelar tu reserva para {pet.name}
          </DialogTitle>
          <DialogDescription className="text-black text-[1.2em] text-center"></DialogDescription>
        </DialogHeader>
        <div className="py-3 space-y-3 text-center">
          <p>Esta es una operación irreversible</p>
          <p>
            Para recuperar esta misma reserva tendrás que que volver a crearla
          </p>
          <p>¿Estás seguro de que quieres continuar?</p>
        </div>

        <DialogFooter className="flex flex-row items-center sm:justify-evenly justify-evenly w-full">
          <Button
            onClick={handleClose}
            className="text-white hover:opacity-75 transition duration-200 bg-primary-dark"
          >
            Cerrar
          </Button>
          <Button
            onClick={handleDelete}
            className="text-white hover:opacity-75 transition duration-200 bg-destructive"
          >
            Cancelar reserva
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
