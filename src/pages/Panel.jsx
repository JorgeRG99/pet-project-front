import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PAGES_URLS } from "@/configs/app-routes-config";
import AdoptionsPanel from "@/pages-components/panel/AdoptionsPanel";
import AllPetsPanel from "@/pages-components/panel/AllPetsPanel";
import BookingsPanel from "@/pages-components/panel/BookingsPanel";
import TrainingsPanel from "@/pages-components/panel/TrainingsPanel";
import { Link } from "react-router-dom";

export default function Panel() {
  return (
    <main className="md:mx-20 sm:mx-10 mx-2 my-10">
      <div className="py-4">
        <Link to={PAGES_URLS.registerWorker}>
          <Button className="text-white bg-primary-medium hover:opacity-75 transition duration-200 w-[14em] active:scale-95">
            Registrar trabajador
          </Button>
        </Link>
      </div>
      <Tabs
        defaultValue="pets"
        className="sm:w-[400px] md:w-full flex flex-col sm:flex-row sm:gap-20 gap-10 sm:items-start items-center"
      >
        <TabsList className="p-2 sm:h-[14em] w-full sm:w-[200px] sm:gap-5 gap-3 bg-white shadow flex sm:flex-col flex-row sm:items-start justify-evenly">
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="pets"
          >
            Mascotas
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="adoptions"
          >
            Adopciones
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="trainings"
          >
            Entrenamientos
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="bookings"
          >
            Reservas
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="pets">
          <AllPetsPanel />
        </TabsContent>
        <TabsContent className="w-full" value="adoptions">
          <AdoptionsPanel />
        </TabsContent>
        <TabsContent className="w-full" value="trainings">
          <TrainingsPanel />
        </TabsContent>
        <TabsContent className="w-full" value="bookings">
          <BookingsPanel />
        </TabsContent>
      </Tabs>
    </main>
  );
}
