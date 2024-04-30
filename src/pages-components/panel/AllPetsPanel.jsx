import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePets } from "@/hooks/usePets";
import Female from "@/icons/Female";
import Male from "@/icons/Male";
import { timeWithUs } from "@/utils/utility-functions/timeWithUs";
import { useEffect, useState } from "react";
import EditPetInfoDialog from "./dialogs/EditPetInfoDialog";
import DeletePetDialog from "./dialogs/DeletePetDialog";

export default function AllPetsPanel() {
  const [pets, setPets] = useState([]);
  const { allPets } = usePets();

  useEffect(() => {
    const getAllPets = async () => {
      const res = await allPets();
      setPets(res);
    };

    getAllPets();
  }, []);

  return (
    <section className="flex flex-col gap-6 items-end">
      <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 w-[10em]">
        Añadir mascota
      </Button>
      <div className="w-full grid xs:grid-cols-pets grid-cols-petsmall gap-12">
        {pets?.map((pet) => (
          <Card className="w-full flex flex-col justify-evenly" key={pet.id}>
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <p className="text-xl">{pet.name}</p>
                <span>
                  {pet.gender === "male" ? (
                    <Male size={20} />
                  ) : (
                    <Female size={20} />
                  )}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-sm">
                <p>{pet.additional_info}</p>
                <div className="flex justify-between text-sm">
                  <p>Edad: {pet.age} años</p>
                  <p>Peso: {pet.weight}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>{timeWithUs(pet.date_entry)} con nosotros</p>
                  <p className="font-medium text-[1.1em]">{pet.breed}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-10">
              <EditPetInfoDialog pet={pet} setPets={setPets} />
              <DeletePetDialog pet={pet} setPets={setPets} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
