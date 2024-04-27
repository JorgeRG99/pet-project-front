import { Button } from "@/components/ui/button";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { Link } from "react-router-dom";
import LogoutDialog from "./dialogs/LogoutDialog";

export default function LoggedNavbarOptions() {
  return (
    <section className="flex items-center space-x-4 hover:">
      <Link to={PAGES_URLS.profile}>
        <Button className="text-white bg-primary-dark hover:bg-primary">
          Perfil
        </Button>
      </Link>
      <LogoutDialog />
    </section>
  );
}
