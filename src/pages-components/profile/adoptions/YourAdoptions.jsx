import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAdoption } from "@/hooks/useAdoption";
import Check from "@/icons/Check";
import Female from "@/icons/Female";
import Male from "@/icons/Male";
import Pending from "@/icons/Pending";
import { useEffect, useState } from "react";
import CancelAdoptionDialog from "./dialogs/CancelAdoptionDialog";
import { Link } from "react-router-dom";
import { PAGES_URLS } from "@/configs/app-routes-config";

export default function YourAdoptions() {
  const [adoptions, setAdoptions] = useState(null);
  const { yourAdoptionsFetch } = useAdoption();

  useEffect(() => {
    const getAdoptions = async () => {
      const fetchedAdoptions = await yourAdoptionsFetch();
      setAdoptions(fetchedAdoptions);
    };

    getAdoptions();
  }, []);

  return (
    <section>
      {adoptions?.length > 0 ? (
        <div className="mt-12 grid grid-cols-adoptions gap-12 px-8">
          {adoptions.map((adoption) => {
            const { status, pet } = adoption;

            return (
              <Card
                className="w-full flex flex-col justify-evenly"
                key={adoption.id}
              >
                <CardHeader>
                  <CardTitle className="flex gap-8 items-center">
                    <p className="text-2xl">
                      Proceso de adopcion de {pet.name}
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
                        <Check />
                        <p className="font-medium">Solicitada</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        {status === "accepted" ? <Check /> : <Pending />}
                        <p className="font-medium">Aceptada</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        {status === "confirmed" ? <Check /> : <Pending />}{" "}
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
                    <CancelAdoptionDialog
                      adoptionId={adoption.id}
                      setAdoptions={setAdoptions}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-evenly items-center h-[15em]">
          <h3 className="text-xl">Aun no has realizado alguna adopción</h3>
          <Link to={PAGES_URLS.dogs}>
            <Button className="text-white bg-primary hover:opacity-80 transition duration-200">
              Conoce a tu proximo compañero
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
