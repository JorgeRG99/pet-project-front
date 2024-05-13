import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookings } from "@/hooks/useBookings";
import { useExternalPets } from "@/hooks/useExternalPets";
import { useHotelUnavailableDates } from "@/hooks/useHotelUnavailableDates";
import { cn } from "@/lib/utils";
import AddYourPetDialog from "@/pages-components/profile/your-pets/dialogs/AddYourPetDialog";
import { calculateCareservicePrice } from "@/utils/utility-functions/calculateCareServicePrice";
import { datesArrayToUnixDateArray } from "@/utils/utility-functions/datesArrayToUnixDateArray";
import { emptyObject } from "@/utils/utility-functions/emtpyObject";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { formatDate } from "@/utils/utility-functions/formatDate";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function BookingDialog({ type }) {
  const [totalPrice, setTotalPrice] = useState(null);
  const { hotelUnavailableDates } = useHotelUnavailableDates();
  const [open, setOpen] = useState(false);
  const [booking, setBooking] = useState({});
  const [date, setDate] = useState({
    from: null,
    to: null,
  });
  const [pets, setPets] = useState([]);
  const { yourPetsToBooking } = useExternalPets(type);
  const unavailableSubmit = pets.length === 0 || emptyObject(booking);
  const { addBooking } = useBookings(booking);

  useEffect(() => {
    if (!unavailableSubmit) {
      const days = (date.to - date.from) / 86400000 + 1;
      setTotalPrice(
        calculateCareservicePrice(
          days,
          pets.find((pet) => pet.id === booking?.externalPetId)
        )
      );
    }
  }, [date, booking?.externalPetId]);

  const handlePetSelection = (value) =>
    setBooking((prevState) => ({ ...prevState, externalPetId: value }));

  useEffect(() => {
    const getPets = async () => {
      const res = await yourPetsToBooking();
      setPets(res);
    };

    getPets();
  }, []);

  const handleClose = () => {
    setBooking({});
    setTotalPrice(null);
    setDate({ from: null, to: null });
    setOpen((prevState) => !prevState);
  };

  const setUnavailableDates = (calendarDate) => {
    const unavailableDatesOnUnix = datesArrayToUnixDateArray(
      hotelUnavailableDates
    ).sort((a, b) => a - b);

    let isUnavailable = unavailableDatesOnUnix.some((unavDate) => {
      return unavDate === calendarDate.getTime();
    });

    if (!date?.from) return calendarDate < new Date() || isUnavailable;

    const unavDatesGreaterThanSelected = unavailableDatesOnUnix.filter(
      (unavDate) => {
        if (date.from.getTime() < unavDate) return unavDate;
      }
    );

    if (unavDatesGreaterThanSelected.length === 0)
      return calendarDate < date.from;

    return (
      calendarDate < date.from ||
      calendarDate >= unavDatesGreaterThanSelected[0]
    );
  };

  const handleSubmit = async () => {
    if (!unavailableSubmit) {
      const data = convertKeysToSnakeCase({
        ...booking,
        totalPrice: totalPrice,
        arrive: formatDate(date.from),
        departure: formatDate(date.to),
      });
      await addBooking(data);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95 w-[40%]">
          Reservar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[500px] w-[90%] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Reserva una estancia para tu mascota
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 space-y-6 max-w-full">
          <div className="w-full space-y-2">
            <Label htmlFor="in-out">Entrada - Salida</Label>
            <div>
              <Popover className="w-full">
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Seleccione las fechas</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    disabled={setUnavailableDates}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="w-full space-y-2">
            {pets.length > 0 ? (
              <Select name="breed" onValueChange={handlePetSelection}>
                <Label htmlFor="breed">Selecciona una mascota</Label>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una raza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {pets?.map((pet) => (
                      <SelectItem key={crypto.randomUUID()} value={pet.id}>
                        {pet.name} - {pet.breed || pet?.breed_name} -{" "}
                        {pet.gender === "male" ? "Macho" : "Hembra"}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            ) : (
              <div className="pt-2 flex flex-col gap-6 items-center">
                <p>Debes añadir una mascota antes de reservar</p>
                <AddYourPetDialog setPets={setPets} />
              </div>
            )}
          </div>

          {totalPrice && (
            <p className="font-bold text-xl">Total: {totalPrice.toFixed(2)}€</p>
          )}
          <div className="space-y-2 text-sm">
            <p>
              El pago correspondiente se realizará a su llegada a nuestro
              centro.
            </p>
            <p>
              Valoramos su elección de nuestros servicios y esperamos atenderle
              pronto.
            </p>
          </div>
        </div>
        <DialogFooter className="flex flex-row items-center sm:justify-evenly justify-evenly w-full">
          <Button
            onClick={handleClose}
            className="text-white bg-destructive hover:opacity-75 transition duration-200 active:scale-95"
          >
            Cerrar
          </Button>
          <Button
            disabled={unavailableSubmit}
            onClick={handleSubmit}
            className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95"
          >
            Reservar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
