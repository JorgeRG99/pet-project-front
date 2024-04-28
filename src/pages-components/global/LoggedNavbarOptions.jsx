import { Button } from "@/components/ui/button";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { Link } from "react-router-dom";
import LogoutDialog from "./dialogs/LogoutDialog";

export default function LoggedNavbarOptions() {
  return (
    <section className="flex items-center sm:space-x-4 sm:flex-row flex-col">
      <Link to={PAGES_URLS.profile} className="py-6 sm:py-0 font-normal sm:hover:bg-gray-200 ">
        <Button className="text-white bg-primary-dark hover:bg-primary">
          Perfil
        </Button>
      </Link>
      <LogoutDialog />
    </section>
  );
}
