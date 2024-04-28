import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDogs } from "@/hooks/useDogs";
import Female from "@/icons/Female";
import Male from "@/icons/Male";
import { timeWithUs } from "@/utils/utility-functions/timeWithUs";

export default function Dogs() {
  const { dogs } = useDogs();

  return (
    <main className="my-16">
      <h1 className="text-3xl font-bold font-alegreya text-center">
        Encuentra Tu Compañero Fiel - <span className="text-primary-dark">Adopción de Perros</span>
      </h1>
      <section className="mt-12 grid xs:grid-cols-pets grid-cols-petsmall gap-12 px-8">
        {dogs?.map((dog) => (
          <Card className="w-full flex flex-col justify-evenly" key={dog.id}>
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <p className="text-xl">{dog.name}</p>
                <span>{dog.gender === "male" ? <Male /> : <Female />}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-sm">
                <p>{dog.additional_info}</p>
                <div className="flex justify-between text-sm">
                  <p>Edad: {dog.age} años</p>
                  <p>Peso: {dog.weight}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>{timeWithUs(dog.date_entry)} con nosotros.</p>
                  <p className="font-medium text-[1.1em]">{dog.breed}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-primary-dark text-white w-full transition durartion-300 hover:bg-primary">
                Solicitar adopcion
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
