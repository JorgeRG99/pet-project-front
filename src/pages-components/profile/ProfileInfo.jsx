import { ROLES } from "@/configs/assets-config";
import { UserSessionContext } from "@/context/userSession";
import Cake from "@/icons/Cake";
import IdCard from "@/icons/IdCard";
import Mail from "@/icons/Mail";
import Phone from "@/icons/Phone";
import { ageFromBirth } from "@/utils/utility-functions/ageFromBirth";
import { userSince } from "@/utils/utility-functions/userSince";
import { useContext } from "react";
import ProfileOperations from "./ProfileOperations";

export default function ProfileInfo() {
  const { userSession } = useContext(UserSessionContext);
  const { email, name, last_name, birth_date, dni, phone, created_at, role } =
    userSession;
  const fullName = `${name} ${last_name}`;
  const age = ageFromBirth(birth_date);
  const createdAt = userSince(created_at);
  const registeredSince = `${ROLES[role]} desde ${createdAt[0]} de ${createdAt[1]}`;

  return (
    <section className="py-8 flex flex-col gap-16 w-[400px] md:w-[580px] xs:w-[450px]">
      <div className="flex xs:space-x-8 xs:justify-start justify-evenly items-end">
        <h2 className="md:text-3xl text-2xl font-medium capitalize text-center">
          {fullName}
        </h2>
        <p className="md:text-xl text-md font-normal text-center">{age} años</p>
      </div>

      <div className="flex flex-col space-y-12 xs:px-0 px-4">
        <div className="flex items-center space-x-6">
          <Mail />
          <p className="md:text-xl text-md font-normal text-center">{email}</p>
        </div>

        <div className="flex items-center space-x-6">
          <IdCard />
          <p className="md:text-xl text-md font-normal text-center">{dni}</p>
        </div>

        <div className="flex items-center space-x-6">
          <Phone />
          <p className="md:text-xl text-md font-normal text-center">
            +34 {phone}
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <Cake />
          <p className="md:text-xl text-md font-normal text-center">
            {registeredSince}
          </p>
        </div>

        <ProfileOperations />
      </div>
    </section>
  );
}
