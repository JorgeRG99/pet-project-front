import { useTraining } from "@/hooks/useTraining";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { daysUntil } from "@/utils/utility-functions/daysUntil";
import Male from "@/icons/Male";
import Female from "@/icons/Female";
import { dateToRealString } from "@/utils/utility-functions/dateToRealString";
import { useExternalPets } from "@/hooks/useExternalPets";
import Dog from "@/icons/Dog";
import Cat from "@/icons/Cat";
import CancelBookingDialog from "../profile/bookings/dialogs/CancelBookingDialog";
import { useBookings } from "@/hooks/useBookings";

export default function BookingsPanel() {
  const [scheduledBookings, setScheduledBookings] = useState([]);
  const { bookingsPanel } = useBookings();
  const [pets, setPets] = useState([]);
  const { allPetsWithDeleted } = useExternalPets();

  useEffect(() => {
    const getAllPets = async () => {
      const res = await allPetsWithDeleted();
      setPets(res);
    };

    getAllPets();
  }, []);

  useEffect(() => {
    const getBookings = async () => {
      const fetchedBookings = await bookingsPanel();
      setScheduledBookings(fetchedBookings);
    };

    getBookings();
  }, []);

  return (
    <section className="min-h-[30em]">
      {scheduledBookings?.length > 0 ? (
        <div className="w-full flex flex-wrap gap-12">
          {scheduledBookings?.map((booking) => {
            const pet = pets.find((pet) => pet?.id === booking?.external_pet_id);
            const daysUntilStart = daysUntil(booking?.arrive);
            const daysUntilEnd = daysUntil(booking?.departure);

            return (
              <Card
                className="w-full xs:w-[350px] flex flex-col justify-evenly"
                key={crypto.randomUUID()}
              >
                <CardHeader>
                  <CardTitle className="flex gap-4 items-center justify-between">
                    <p className="text-xl capitalize">
                      Reserva para {pet?.name}
                    </p>
                    <div className="flex gap-3">
                      <span>
                        {pet?.gender === "male" ? (
                          <Male size={25} />
                        ) : (
                          <Female size={25} />
                        )}
                      </span>
                      <span>{pet?.specie === "dog" ? <Dog /> : <Cat />}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium text-primary-dark">
                    Dueño: {booking?.user?.name} {booking?.user?.last_name}
                  </p>
                  <div className="space-y-2 text-md">
                    <p>
                      <span className="font-medium">Llegada:</span>{" "}
                      {dateToRealString(booking?.arrive)}
                    </p>
                    <p>
                      <span className="font-medium">Salida:</span>{" "}
                      {dateToRealString(booking?.departure)}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  {booking?.cancelled === 1 ? (
                    <p className="text-destructive font-medium font-alegreya text-xl">
                      Reserva cancelada
                    </p>
                  ) : (
                    <>
                      <div className="text-lg font-alegreya font-medium text-primary-dark">
                        {daysUntilStart === 0 ? (
                          <p>La estancia de su mascota comienza hoy!</p>
                        ) : daysUntilStart < 0 && daysUntilEnd === 0 ? (
                          <p>La estancia de su mascota termina hoy!</p>
                        ) : daysUntilStart < 0 && daysUntilEnd < 0 ? (
                          <p>La estancia de su mascota ha terminado!</p>
                        ) : daysUntilStart > 0 ? (
                          <p>
                            Quedan {daysUntilStart} dia
                            {daysUntilStart > 1 ? "s" : ""} para el comienzo!
                          </p>
                        ) : daysUntilStart < 0 && daysUntilEnd > 0 ? (
                          <p>
                            Quedan {daysUntilEnd} dia
                            {daysUntilEnd > 1 ? "s" : ""} para el final!
                          </p>
                        ) : null}
                      </div>

                      {daysUntilStart > 0 && (
                        <CancelBookingDialog
                          booking={booking}
                          pet={pet}
                          setBookings={setScheduledBookings}
                        />
                      )}
                    </>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-evenly items-center h-[15em]">
          <h3 className="text-xl">Aun no se hay reservas</h3>
        </div>
      )}
    </section>
  );
}
