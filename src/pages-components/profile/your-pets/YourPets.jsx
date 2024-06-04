import { useEffect, useState } from "react";
import AddYourPetDialog from "./dialogs/AddYourPetDialog";
import { useExternalPets } from "@/hooks/useExternalPets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Male from "@/icons/Male";
import Female from "@/icons/Female";
import EditYourPetDialog from "./dialogs/EditYourPetDialog";
import DeleteYourPetDialog from "./dialogs/DeleteYourPetDialog";

export default function YourPets() {
  const [pets, setPets] = useState([]);
  const { yourPets } = useExternalPets();

  useEffect(() => {
    const getAllPets = async () => {
      const res = await yourPets();
      setPets(res);
    };
    getAllPets();
  }, []);

  return (
    <section>
      {pets.length === 0 ? (
        <div className="flex flex-col gap-8 items-center h-[15em] mt-6">
          <h3 className="text-md">Aun no has añadido ninguna mascota</h3>
          <h3 className="text-md">
            Para contratar cualquiera de nuestro servicio deberás añadirla
            primero
          </h3>
          <AddYourPetDialog setPets={setPets} />
        </div>
      ) : (
        <section className="xs:px-20 px-5 pt-6 flex flex-col gap-6 items-center">
          <AddYourPetDialog setPets={setPets} />
          <div className="flex flex-row flex-wrap justify-center gap-12 px-8">
            {pets?.map((pet) => (
              <Card
                className="w-full xs:w-[400px] flex flex-col justify-evenly"
                key={crypto.randomUUID()}
              >
                <CardHeader>
                  <CardTitle className="flex gap-4 items-center">
                    <p className="text-xl capitalize">{pet?.name}</p>
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
                  <div className="space-y-6 text-sm">
                    <p>{pet?.additional_info}</p>
                    <div className="flex justify-between text-sm">
                      <p>Edad: {pet?.age} años</p>
                      <p>Peso: {pet?.weight} kg</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="font-medium text-[1.1em]">{pet?.breed}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <EditYourPetDialog pet={pet} setPets={setPets} />
                  <DeleteYourPetDialog pet={pet} setPets={setPets} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
