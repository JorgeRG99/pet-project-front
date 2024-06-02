import { useEffect, useState } from "react";
import { useExternalPets } from "@/hooks/useExternalPets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { Button } from "@/components/ui/button";
import Male from "@/icons/Male";
import Female from "@/icons/Female";
import { daysUntil } from "@/utils/utility-functions/daysUntil";
import { dateToRealString } from "@/utils/utility-functions/dateToRealString";
import { useTraining } from "@/hooks/useTraining";
import CancelTrainingDialog from "./dialogs/CancelTrainingDialog";

export default function YourTrainings() {
  const [trainings, setTrainings] = useState([]);
  const { yourTrainings } = useTraining();
  const { yourPetsWithDeleted } = useExternalPets();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getYourTrainings = async () => {
      const res = await yourTrainings();
      setTrainings(res);
    };

    const getPets = async () => {
      const res = await yourPetsWithDeleted();
      setPets(res);
    };

    getPets();
    getYourTrainings();
  }, []);

  return (
    <section>
      {trainings.length === 0 ? (
        <div className="flex flex-col gap-8 items-center h-[15em] mt-6">
          <h3 className="text-md">
            Aun no has solicitado servicio de adiestramiento
          </h3>
          <Link to={PAGES_URLS.training}>
            <Button className="text-white bg-primary-medium hover:opacity-80 transition duration-200">
              Educa tu mascota
            </Button>
          </Link>
        </div>
      ) : (
        <section className="pt-6 flex flex-col gap-6 items-center">
          <div className="flex flex-row flex-wrap justify-center gap-12 px-8">
            {trainings?.map((training) => {
              const pet = pets.find(
                (pet) => pet.id === training.external_pet_id
              );
              const daysUntilStart = daysUntil(training?.date);

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
                    <div className="space-y-2 text-xl">
                      <p className="font-medium font-alegreya">
                        {dateToRealString(training?.date)}
                      </p>
                      <p className="font-medium font-alegreya">
                        A las {training?.hour.slice(0, 5)}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    {training.cancelled === 1 ? (
                      <p className="text-destructive font-medium font-alegreya text-xl">
                        Reserva cancelada
                      </p>
                    ) : (
                      <>
                        <div className="text-lg font-alegreya font-medium text-primary-dark">
                          {daysUntilStart === 0 ? (
                            <p>La sesion de entrenamiento es hoy!</p>
                          ) : daysUntilStart < 0 ? (
                            <p>La sesion de entrenamiento se ha completado</p>
                          ) : daysUntilStart > 0 ? (
                            <p>
                              Quedan {daysUntilStart} dia
                              {daysUntilStart > 1 ? "s" : ""} para el comienzo!
                            </p>
                          ) : null}
                        </div>

                        {daysUntilStart > 0 && (
                          <CancelTrainingDialog
                            training={training}
                            pet={pet}
                            setTrainings={setTrainings}
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
