import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdoption } from "@/hooks/useAdoption";
import Check from "@/icons/Check";
import Female from "@/icons/Female";
import Male from "@/icons/Male";
import Pending from "@/icons/Pending";
import { useEffect, useState } from "react";
import ManageAdoptionDialog from "./dialogs/ManageAdoptionDialog";
import Cross from "@/icons/Cross";

export default function AdoptionsPanel() {
  const [adoptions, setAdoptions] = useState(null);
  const { allAdoptions } = useAdoption();

  useEffect(() => {
    const getAdoptions = async () => {
      const fetchedAdoptions = await allAdoptions();
      setAdoptions(fetchedAdoptions);
    };

    getAdoptions();
  }, []);

  return (
    <section>
      {adoptions?.length > 0 ? (
        <div className="w-full grid xs:grid-cols-pets grid-cols-petsmall gap-12">
          {adoptions.map((adoption) => {
            const { status, pet } = adoption;

            return (
              <Card
                className="max-w-[450px] flex flex-col justify-evenly"
                key={crypto.randomUUID()}
              >
                <CardHeader>
                  <CardTitle className="flex gap-8 items-center">
                    <p className="text-2xl">
                      Proceso de adopcion de{" "}
                      <span className="capitalize">{pet.name}</span>
                    </p>
                    <span>
                      {pet.gender === "male" ? (
                        <Male size={30} />
                      ) : (
                        <Female size={30} />
                      )}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-20">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Proceso</h3>

                    <div className="space-y-4">
                      <div className="flex gap-3 items-center">
                        {status !== "cancelled" ? <Check /> : <Cross />}
                        <p className="font-medium">Solicitada</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        {(status === "accepted" || status === "confirmed") &&
                        status !== "cancelled" ? (
                          <Check />
                        ) : status === "pending" ? (
                          <Pending />
                        ) : (
                          <Cross />
                        )}
                        <p className="font-medium">Aceptada</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        {status === "confirmed" ? (
                          <Check />
                        ) : status !== "cancelled" ? (
                          <Pending />
                        ) : (
                          <Cross />
                        )}{" "}
                        <p className="font-medium">Confirmada</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                      <h3>
                        <span className="font-semibold">Especie:</span>{" "}
                        {pet.specie}
                      </h3>
                      <h3>
                        <span className="font-semibold">Raza:</span> {pet.breed}
                      </h3>
                    </div>
                    <ManageAdoptionDialog
                      adoptionId={adoption.id}
                      setAdoptions={setAdoptions}
                      status={status}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-evenly items-center h-[15em]">
          <h3 className="text-xl">Aun no se ha realizado ninguna adopción</h3>
        </div>
      )}
    </section>
  );
}
