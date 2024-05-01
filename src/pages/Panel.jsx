import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdoptionsPanel from "@/pages-components/panel/AdoptionsPanel";
import AllPetsPanel from "@/pages-components/panel/AllPetsPanel";

export default function Panel() {
  return (
    <main className="md:mx-20 sm:mx-10 mx-2 my-10">
      <Tabs defaultValue="pets" className="sm:w-[400px] md:w-full flex flex-col sm:flex-row sm:gap-20 gap-10 sm:items-start items-center">
        <TabsList className="p-2 sm:h-[20em] w-full sm:w-[200px] sm:gap-5 gap-3 bg-white shadow flex sm:flex-col flex-row sm:items-start">
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] w-[17%] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="pets"
          >
            Mascotas
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] w-[17%] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="adoptions"
          >
            Adopciones
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] w-[13%] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="profile"
          >
            Perfil
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] w-[22%] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="appointments"
          >
            Proximas citas
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-[.9em] text-[.7em] w-[17%] sm:w-auto font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="history"
          >
            Historial
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="pets">
          <AllPetsPanel />
        </TabsContent>
        <TabsContent className="w-full" value="adoptions">
          <AdoptionsPanel />
        </TabsContent>
      </Tabs>
    </main>
  );
}
