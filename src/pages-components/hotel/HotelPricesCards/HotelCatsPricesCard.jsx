import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Check from "@/icons/Check";
import BookingDialog from "../dialogs/BookingDialog";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UserSessionContext } from "@/context/userSession";
import { DISCOUNTS, PRICES } from "@/configs/hotel-config";

export default function HotelCatsPricesCard() {
  const { userSession } = useContext(UserSessionContext);
  const { token } = userSession;

  return (
    <Card
      className="md:w-[550px] w-[90%] flex flex-col justify-evenly shadow-2xl py-6"
      key={crypto.randomUUID()}
    >
      <CardHeader className="relative">
        <CardTitle className="text-center text-2xl">
          Tarifas para gatos
        </CardTitle>
        <div className="md:h-[150px] md:w-[150px] sm:h-[120px] sm:w-[120px] h-[100px] w-[100px] hidden sm:block absolute top-[97%] right-[10%] bg-primary rounded-[50%] overflow-hidden">
          <img
            src="./images/hotel/cat-card1.png"
            alt="Pequeño perro blanco tumbado tranquilamente sobre una superficie suave, luciendo relajado y sereno"
            className="ml-6 mt-6"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-12 w-full p-8 text-sm font-medium">
        <div className="md:space-y-6 space-y-3">
          <h3>Pequeños (hasta 8 kg) ~ {PRICES.cats.small}€/día</h3>
          <h3>Grandes (Más de 8 kg) ~ {PRICES.cats.medium}€/día</h3>
        </div>
        <div className="space-y-3">
          <p>Estancia semanal: {DISCOUNTS.week}% de descuento</p>
          <p>Estancia mensual: {DISCOUNTS.month}% de descuento</p>

          <p>Para un precio personalizado no dudes en contactarnos</p>
        </div>
        <div className="w-full md:space-y-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Check />
            <p> Alimentación balanceada y adaptada</p>
          </div>
          <div className="flex items-center space-x-2">
            <Check />
            <p>Terapias y Bienestar Personalizado</p>
          </div>
          <div className="flex items-center space-x-2">
            <Check />
            <p>Programas de Socialización y Entrenamiento</p>
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
          <BookingDialog type={"cats"} />
        )}
      </CardFooter>
    </Card>
  );
}
