import { userDelete } from "@/services/UserService";
import { useUserSession } from "./useUserSession";

export function useDeleteUser() {
    const { userSession, unsetUser } = useUserSession();
    const { token } = userSession;

    const deleteUser = async (password) => {
        try {
            const res = await userDelete(token, password);

            if(typeof res === 'string') {
                unsetUser()
            }

            return res;
        } catch (error) {
            throw new Error(`Error al borrar usuario ${error.message}`);
        }
    }

    return { deleteUser }
}