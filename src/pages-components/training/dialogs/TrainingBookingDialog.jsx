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
import { useExternalPets } from "@/hooks/useExternalPets";
import { useTraining } from "@/hooks/useTraining";
import { useTrainingAvailableHours } from "@/hooks/useTrainingAvailableHours";
import { useTrainingUnavailableDates } from "@/hooks/useTrainingUnavailableDates";
import { cn } from "@/lib/utils";
import AddYourPetDialog from "@/pages-components/profile/your-pets/dialogs/AddYourPetDialog";
import { calculateTrainingServicePrice } from "@/utils/utility-functions/calculateTrainingServicePrice";
import { datesArrayToUnixDateArray } from "@/utils/utility-functions/datesArrayToUnixDateArray";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { formatDate } from "@/utils/utility-functions/formatDate";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function TrainingBookingDialog({ type }) {
  const [totalPrice, setTotalPrice] = useState(null);
  const [trainingAvailableHours, setTrainingAvailableHours] = useState([]);
  const [trainingUnavailableDates, setTrainingUnavailableDates] = useState([]);
  const { getFullDates } = useTrainingUnavailableDates();
  const { getAvailableHoursByDate } = useTrainingAvailableHours();
  const [open, setOpen] = useState(false);
  const [booking, setBooking] = useState({});
  const [date, setDate] = useState();
  const [pets, setPets] = useState([]);
  const [hour, setHour] = useState();
  const { yourPetsToBooking } = useExternalPets(type);
  const unavailableSubmit = pets.length === 0 || !date || !hour;
  const { addTraining } = useTraining();

  const handlePetSelection = (value) =>
    setBooking((prevState) => ({ ...prevState, externalPetId: value }));

  useEffect(() => {
    const getPets = async () => {
      const res = await yourPetsToBooking();
      setPets(res);
    };

    getPets();
  }, []);

  useEffect(() => {
    const getAvHours = async () => {
      const res = await getAvailableHoursByDate(formatDate(date));

      if (res?.status === 200) {
        setTrainingAvailableHours(res.response.result);
      }
    };

    if (date) getAvHours();
  }, [date]);

  useEffect(() => {
    if (!unavailableSubmit) {
      setTotalPrice(
        calculateTrainingServicePrice(
          pets.find((pet) => pet.id === booking?.externalPetId)
        )
      );
    }
  }, [date, booking?.externalPetId, hour]);

  const handleClose = () => {
    const getDates = async () => {
      const dates = await getFullDates();
      setTrainingUnavailableDates(dates);
    };

    getDates();
    setBooking({});
    setTotalPrice(null);
    setDate(null);
    setOpen((prevState) => !prevState);
  };

  const handleHourChange = (value) => setHour(value);

  const setUnavailableDates = (calendarDate) => {
    const unavailableDatesOnUnix = datesArrayToUnixDateArray(
      trainingUnavailableDates
    );
    const isUnavailable = unavailableDatesOnUnix.some(
      (unavDate) => calendarDate.getTime() === unavDate
    );
    return isUnavailable || calendarDate < new Date();
  };

  const handleSubmit = async () => {
    if (!unavailableSubmit) {
      const data = convertKeysToSnakeCase({
        ...booking,
        totalPrice,
        date: format(date, "yyyy-MM-dd"),
        hour,
      });
      await addTraining(data);
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
            Solicita adiestramiento para tu {type === "dogs" ? "perro" : "gato"}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 max-w-full">
          {pets.length > 0 ? (
            <div className="space-y-4">
              <div className="w-full space-y-2">
                <Select name="breed" onValueChange={handlePetSelection}>
                  <Label htmlFor="breed">Selecciona una mascota</Label>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una mascota" />
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
              </div>
              <div className="w-full space-y-2">
                <Label htmlFor="in-out">Seleccione las fechas</Label>
                <div>
                  <Popover className="w-full">
                    <PopoverTrigger className="w-full" asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal truncate"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "LLL dd, y")
                        ) : (
                          <span>Seleccione una fecha</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={date}
                        numberOfMonths={1}
                        onSelect={setDate}
                        disabled={setUnavailableDates}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {date && trainingAvailableHours.length > 0 && (
                <div className="w-full space-y-2">
                  <Select name="breed" onValueChange={handleHourChange}>
                    <Label htmlFor="breed">Selecciona una hora</Label>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una hora" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {trainingAvailableHours?.map((hour) => (
                          <SelectItem key={crypto.randomUUID()} value={hour}>
                            {hour.slice(0, 5)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
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
            El pago correspondiente se realizará a su llegada a nuestro centro.
          </p>
          <p>
            Valoramos su elección de nuestros servicios y esperamos atenderle
            pronto.
          </p>
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
            Solicitar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
