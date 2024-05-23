import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Check from "@/icons/Check";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { useContext } from "react";
import { UserSessionContext } from "@/context/userSession";
import { TRAINING_PRICES } from "@/configs/training-config";
import TrainingBookingDialog from "../dialogs/TrainingBookingDialog";

export default function TrainingDogsPricesCard() {
  const { userSession } = useContext(UserSessionContext);
  const { token } = userSession;

  return (
    <Card
      className="md:w-[550px] w-[90%] flex flex-col justify-evenly shadow-2xl py-6"
      key={crypto.randomUUID()}
    >
      <CardHeader className="relative">
        <CardTitle className="text-center text-2xl">
          Tarifas para perros
        </CardTitle>
        <div className="md:h-[150px] md:w-[150px] sm:h-[120px] sm:w-[120px] h-[100px] w-[100px] hidden sm:block p-2 absolute top-[97%] right-[10%] bg-primary rounded-[50%] overflow-hidden">
          <img
            src="./images/hotel/dog-card1.png"
            alt="Pequeño perro blanco tumbado tranquilamente sobre una superficie suave, luciendo relajado y sereno"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-8 w-full p-8 sm:text-sm text-xs font-medium">
        <div className="md:space-y-4">
          <h3 className="font-semibold">Medianos (Hasta 25 kg)</h3>
          <p className="pl-4">- {TRAINING_PRICES.dogs.medium}€ por sesion</p>
        </div>
        <div className="md:space-y-4">
          <h3 className="font-semibold">Grandes (Más de 25 kg)</h3>
          <p className="pl-4">- {TRAINING_PRICES.dogs.big}€ por sesion</p>
        </div>
        <div className="w-full md:space-y-5 space-y-3">
          <div className="flex items-center space-x-2">
            <Check />
            <p>Sesiones individuales de 50 minutos.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Check />
            <p>Técnicas de refuerzo positivo</p>
          </div>
          <div className="flex items-center space-x-2">
            <Check />
            <p>Socialización con otros perros y personas</p>
          </div>
          <div className="flex items-center space-x-2">
            <Check />
            <p>Consejos para manejo de conductas en casa</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        {!token ? (
          <Link to={PAGES_URLS.login} className="w-[40%]">
            <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95 w-full">
              Reservar
            </Button>
          </Link>
        ) : (
          <TrainingBookingDialog type="dogs" />
        )}
      </CardFooter>
    </Card>
  );
}
