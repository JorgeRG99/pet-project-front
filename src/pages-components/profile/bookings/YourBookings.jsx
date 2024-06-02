import { useEffect, useState } from "react";
import { useExternalPets } from "@/hooks/useExternalPets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBookings } from "@/hooks/useBookings";
import { Link } from "react-router-dom";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { Button } from "@/components/ui/button";
import Male from "@/icons/Male";
import Female from "@/icons/Female";
import { daysUntil } from "@/utils/utility-functions/daysUntil";
import CancelBookingDialog from "./dialogs/CancelBookingDialog";
import { dateToRealString } from "@/utils/utility-functions/dateToRealString";

export default function YourBookings() {
  const [bookings, setBookings] = useState([]);
  const { yourBookings } = useBookings();
  const { yourPetsWithDeleted } = useExternalPets();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getYourBookings = async () => {
      const res = await yourBookings();
      setBookings(res);
    };

    const getPets = async () => {
      const res = await yourPetsWithDeleted();
      setPets(res);
    };

    getPets();
    getYourBookings();
  }, []);

  return (
    <section>
      {bookings.length === 0 ? (
        <div className="flex flex-col gap-8 items-center h-[15em] mt-6">
          <h3 className="text-md">
            Aun no has reservado en nuestro servicio de cuidados
          </h3>
          <Link to={PAGES_URLS.hotel}>
            <Button className="text-white bg-primary-medium hover:opacity-80 transition duration-200">
              Conoce a tu proximo compañero
            </Button>
          </Link>
        </div>
      ) : (
        <section className="pt-6 flex flex-col gap-6 items-center">
          <div className="flex flex-row flex-wrap justify-center gap-12 px-8">
            {bookings?.map((booking) => {
              const pet = pets.find(
                (pet) => pet.id === booking?.external_pet_id
              );
              const daysUntilStart = daysUntil(booking?.arrive);
              const daysUntilEnd = daysUntil(booking?.departure);

              return (
                <Card
                  className="w-full xs:w-[300px] flex flex-col justify-evenly"
                  key={crypto.randomUUID()}
                >
                  <CardHeader>
                    <CardTitle className="flex gap-4 items-center">
                      <p className="text-xl capitalize">
                        Reserva para {pet?.name}
                      </p>
                      <span>
                        {pet?.gender === "male" ? (
                          <Male size={20} />
                        ) : (
                          <Female size={20} />
                        )}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
                            setBookings={setBookings}
                          />
                        )}
                      </>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>
      )}
    </section>
  );
}
