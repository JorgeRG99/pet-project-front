import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import AdoptionCompleted from "@/pages-components/global/AdoptionCompleted";
import AdoptionCancelled from "@/pages-components/global/AdoptionCancelled";
import Cross from "@/icons/Cross";
import Dog from "@/icons/Dog";
import Cat from "@/icons/Cat";

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
        <div className="mt-12 flex flex-row flex-wrap justify-center gap-12 px-8">
          {adoptions.map((adoption) => {
            const { status, pet } = adoption;

            return (
              <Card
                className="w-full xs:w-[400px] flex flex-col justify-evenly"
                key={adoption?.id}
              >
                <CardHeader>
                  <CardTitle className="flex gap-8 items-center">
                    <p className="text-2xl">
                      Proceso de adopcion de{" "}
                      <span className="capitalize">{pet?.name}</span>
                    </p>
                    <span>
                      {pet?.gender === "male" ? (
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

                  <div className="flex flex-col justify-between md:gap-0 gap-10">
                    <div className="flex flex-col gap-4">
                      <div className="w-full flex items-end justify-end">
                        <span>{pet?.specie === "dog" ? <Dog /> : <Cat />}</span>
                      </div>
                      <h3>
                        <span className="font-semibold">Raza:</span> {pet?.breed}
                      </h3>
                    </div>
                    {status === "cancelled" && <AdoptionCancelled />}
                    {status === "confirmed" && <AdoptionCompleted />}
                    {status !== "cancelled" && status !== "confirmed" && (
                      <CancelAdoptionDialog
                        adoptionId={adoption.id}
                        setAdoptions={setAdoptions}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-evenly items-center h-[15em]">
          <h3 className="text-xl">Aun no has realizado alguna adopción</h3>
          <Link to={PAGES_URLS.dogs}>
            <Button className="text-white bg-primary-medium hover:opacity-80 transition duration-200">
              Conoce a tu proximo compañero
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
