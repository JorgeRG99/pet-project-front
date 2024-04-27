import { BAD_PASSWORD, SERVER_ERROR, SUCCESSFUL_PASSWORD_UPDATE } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { userChangeEmail } from "@/services/UserService";
import { useContext } from "react";
import { toast } from "sonner";

export function useChangeEmail() {
    const { userSession } = useContext(UserSessionContext)

    const changeEmail = async (data) => {
        try {
            const res = await userChangeEmail(userSession.token, data)
            if (res.status === 200) {
                toast.success(SUCCESSFUL_PASSWORD_UPDATE);
            } else if (res.status < 500) {
                toast.error(BAD_PASSWORD);
            } else {
                toast.error(SERVER_ERROR);
            }
        } catch (error) {
            throw new Error(`Error al cambiar contraseña ${error.message}`);
        }
    }

    return { changeEmail }
}