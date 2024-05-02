import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { UserSessionContext } from "@/context/userSession";
import { useDogs } from "@/hooks/useDogs";
import Female from "@/icons/Female";
import Male from "@/icons/Male";
import RequestAdoptionDialog from "@/pages-components/catalogues/dialog/RequestAdoptionDialog";
import { timeWithUs } from "@/utils/utility-functions/timeWithUs";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function DogsCatalogue() {
  const { dogs } = useDogs();
  const { userSession } = useContext(UserSessionContext);
  const { token } = userSession;

  return (
    <main className="my-16">
      <h1 className="text-3xl font-bold font-alegreya text-center">
        Encuentra Tu Compañero Fiel -
        <span className="text-primary-dark"> Perros en adopción</span>
      </h1>
      <section className="mt-12 grid xs:grid-cols-pets grid-cols-petsmall gap-12 px-8">
        {dogs?.map((dog) => (
          <Card className="w-full flex flex-col justify-evenly" key={crypto.randomUUID()}>
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <p className="text-xl capitalize">{dog.name}</p>
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
                  <p>{timeWithUs(dog.date_entry)} con nosotros</p>
                  <p className="font-medium text-[1.1em]">{dog.breed}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {!token ? (
                <Link to={PAGES_URLS.login} className="w-full">
                  <Button className="bg-primary-dark text-white w-full transition durartion-300 hover:bg-primary active:scale-95">
                    Solicitar adopcion
                  </Button>
                </Link>
              ) : (
                <RequestAdoptionDialog petId={dog.id} petName={dog.name}/>
              )}
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
