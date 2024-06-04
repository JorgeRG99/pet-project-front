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
import AddPetDialog from "./dialogs/AddPetDialog";
import Dog from "@/icons/Dog";
import Cat from "@/icons/Cat";

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
      <AddPetDialog setPets={setPets} />
      <div className="w-full grid xs:grid-cols-pets grid-cols-petsmall gap-12">
        {pets?.map((pet) => (
          <Card
            className="w-full flex flex-col justify-evenly"
            key={crypto.randomUUID()}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="text-xl capitalize">{pet?.name}</p>
                  <span>
                    {pet?.gender === "male" ? (
                      <Male size={20} />
                    ) : (
                      <Female size={20} />
                    )}
                  </span>
                </div>

                <span>{pet?.specie === "dog" ? <Dog /> : <Cat />}</span>
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
                  <p>{timeWithUs(pet?.date_entry)} con nosotros</p>
                  <p className="font-medium text-[1.1em]">{pet.breed}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <EditPetInfoDialog pet={pet} setPets={setPets} />
              <DeletePetDialog pet={pet} setPets={setPets} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
