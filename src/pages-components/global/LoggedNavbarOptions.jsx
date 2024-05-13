import { Button } from "@/components/ui/button";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { Link } from "react-router-dom";
import LogoutDialog from "./dialogs/LogoutDialog";
import { useUserSession } from "@/hooks/useUserSession";
import { USER_TYPES } from "@/configs/user-types-config";

export default function LoggedNavbarOptions({ setOpen }) {
  const { userSession } = useUserSession();
  const { role } = userSession;

  const buttonText = role === USER_TYPES.user ? "Perfil" : "Panel";
  const redirectUrl =
    role === USER_TYPES.user ? PAGES_URLS.profile : PAGES_URLS.panel;

    const handleClose = () => {
      if(typeof setOpen === 'undefined') return;
      setOpen(false);
    };

  return (
    <section className="flex items-center sm:space-x-4 sm:flex-row flex-col">
      <Link to={redirectUrl} className="py-6 sm:py-0 font-normal">
        <Button
          onClick={handleClose} 
          className="text-white bg-primary-dark hover:opacity-75 transition duration-200 active:scale-95"
        >
          {buttonText}
        </Button>
      </Link>
      <LogoutDialog setOpen={setOpen} />
    </section>
  );
}
