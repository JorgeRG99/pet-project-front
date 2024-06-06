import { useTraining } from "@/hooks/useTraining";
import { useEffect, useState } from "react";
import CancelTrainingDialog from "../profile/trainings/dialogs/CancelTrainingDialog";
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

export default function TrainingsPanel() {
  const [scheduledTrainings, setScheduledTrainings] = useState([]);
  const { trainingPanel } = useTraining();
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
    const getTrainings = async () => {
      const fetchedTrainings = await trainingPanel();
      setScheduledTrainings(fetchedTrainings);
    };

    getTrainings();
  }, []);

  return (
    <section className="min-h-[30em]">
      {scheduledTrainings?.length > 0 ? (
        <div className="w-full flex flex-wrap gap-12">
          {scheduledTrainings?.map((training) => {
            const pet = pets.find((pet) => pet.id === training?.external_pet_id);
            const daysUntilStart = daysUntil(training?.date);

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
                  <div className="space-y-2 text-md">
                    <p className="font-medium text-primary-dark">
                      Dueño: {training?.user?.name} {training?.user?.last_name}
                    </p>
                  </div>
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
                  {training?.cancelled === 1 ? (
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
                          setTrainings={setScheduledTrainings}
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
          <h3 className="text-xl">Aun no se ha reservado entrenamientos</h3>
        </div>
      )}
    </section>
  );
}
