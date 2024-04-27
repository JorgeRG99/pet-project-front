import { SERVER_ERROR, SERVER_VALIDATION_ERROR, SUCCESSFUL_PROFILE_UPDATE } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { userUpdate } from "@/services/UserService";
import { useContext } from "react";
import { toast } from "sonner";

export function useUpdateUser() {
    const { userSession, setUserSession } = useContext(UserSessionContext)

    const updateUser = async (data) => {
        try {
            const res = await userUpdate(userSession.token, data)

            if(res.status === 200){
                setUserSession({ ...userSession, ...data })
                toast.info(SUCCESSFUL_PROFILE_UPDATE);
            } else if (res.status < 500) {
                toast.error(SERVER_VALIDATION_ERROR);
            } else {
                toast.error(SERVER_ERROR);
            }
        } catch (error) {
            throw new Error(`Error al actualizar usuario ${error.message}`);
        }
    }

    return  { updateUser }
}