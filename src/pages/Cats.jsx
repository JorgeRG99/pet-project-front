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
import { useCats } from "@/hooks/useCats";
import Female from "@/icons/Female";
import Male from "@/icons/Male";
import { timeWithUs } from "@/utils/utility-functions/timeWithUs";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cats() {
  const { cats } = useCats();
  const { userSession } = useContext(UserSessionContext);
  const { authToken } = userSession;

  return (
    <main className="my-16">
      <h1 className="text-3xl font-bold font-alegreya text-center">
        Descubre tu Alma Gemela Felina - <span className="text-primary-dark">Gatos en Adopción</span>
      </h1>
      <section className="mt-12 grid grid-cols-petsmall  xs:grid-cols-pets gap-12 px-8">
        {cats?.map((cat) => (
          <Card className="w-full flex flex-col justify-evenly" key={cat.id}>
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <p className="text-xl">{cat.name}</p>
                <span>{cat.gender === "male" ? <Male /> : <Female />}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-sm">
                <p>{cat.additional_info}</p>
                <div className="flex justify-between text-sm">
                  <p>Edad: {cat.age} años</p>
                  <p>Peso: {cat.weight}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>{timeWithUs(cat.date_entry)} con nosotros.</p>
                  <p className="font-medium text-[1.1em]">{cat.breed}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {authToken ? (
                <Button className="bg-primary-dark text-white w-full transition durartion-300 hover:bg-primary">
                  Solicitar adopcion
                </Button>
              ) : (
                <Link to={PAGES_URLS.login} className="w-full">
                  <Button className="bg-primary-dark text-white w-full transition durartion-300 hover:bg-primary">
                    Solicitar adopcion
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
