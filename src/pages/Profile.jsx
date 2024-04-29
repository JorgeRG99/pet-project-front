import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserSessionContext } from "@/context/userSession";
import ProfileInfo from "@/pages-components/profile/ProfileInfo";
import YourAdoptions from "@/pages-components/profile/adoptions/YourAdoptions";
import { takeInitials } from "@/utils/utility-functions/takeInitials";
import { useContext } from "react";

export default function Profile() {
  const { userSession } = useContext(UserSessionContext);
  const initials = takeInitials(userSession.name, userSession.last_name);

  return (
    <main className="w-full py-16 flex flex-col items-center gap-12">
      <div className=" w-[127px] h-[127px] rounded-full bg-primary flex items-center justify-center">
        <Avatar className="w-[120px] h-[120px] border-4 border-white">
          <AvatarImage
            src="https://i.pravatar.cc/300"
            alt="user profile image"
          />
          <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
        </Avatar>
      </div>

      <Tabs
        defaultValue="profile"
        className="w-[400px] md:w-[580px] xs:w-[450px] flex flex-col items-center"
      >
        <TabsList className="p-2 h-auto w-full bg-white shadow">
          <TabsTrigger
            className="md:text-xl xs:text-sm text-[.7em] font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="profile"
          >
            Perfil
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-sm text-[.7em] font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="pets"
          >
            Mascotas
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-sm text-[.7em] font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="appointments"
          >
            Proximas citas
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-sm text-[.7em] font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="history"
          >
            Historial
          </TabsTrigger>
          <TabsTrigger
            className="md:text-xl xs:text-sm text-[.7em] font-normal data-[state=active]:text-white data-[state=active]:bg-primary-dark"
            value="adoptions"
          >
            Adopciones
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="profile">
          <ProfileInfo />
        </TabsContent>
        <TabsContent className="w-full" value="adoptions">
          <YourAdoptions />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
