import { userLogin, userLogout, userRegister } from "@/services/AuthService";
import { useUserSession } from "./useUserSession";
import { StorageManager } from "@/utils/utility-classes/storage-manager";
import { AUTH_TOKEN_STORAGE_KEY } from "@/configs/api-routes-config";
import { toast } from "sonner";
import { BAD_CREDENTIALS, SERVER_ERROR, SERVER_VALIDATION_ERROR, SUCCESSFUL_LOGIN, SUCCESSFUL_LOGOUT, SUCCESSFUL_REGISTER } from "@/configs/user-feedback-config";

export function useAuth() {
    const { setUser, userSession } = useUserSession()

    const register = async (userData) => {
        try {
            const res = await userRegister(userData)
            if (res.status === 201) {
                setUser(res.response.userData, res.response.token)
                toast.success(SUCCESSFUL_REGISTER);
            } else if (res < 500) {
                toast.error(SERVER_VALIDATION_ERROR);
            } else {
                toast.error(SERVER_ERROR);
            }

        } catch (error) {
            throw new Error(`Error en el registro de usuario ${error.message}`);
        }
    }

    const login = async (credentials, remember) => {
        try {
            const res = await userLogin(credentials)
            if (res.status === 200) {
                setUser(res.response.userData, res.response.token)
                if (remember) StorageManager.set(AUTH_TOKEN_STORAGE_KEY, res.response.token)
                toast.info(SUCCESSFUL_LOGIN);
            } else if (res < 500) {
                toast.error(BAD_CREDENTIALS);
            } else {
                toast.error(SERVER_ERROR);
            }
        } catch (error) {
            throw new Error(`Error en el login de usuario ${error.message}`);
        }
    }

    const logout = async () => {
        try {
            const res = await userLogout(userSession.token)
            if (res.status === 200) {
                setUser(null)
                StorageManager.remove(AUTH_TOKEN_STORAGE_KEY)
                toast.info(SUCCESSFUL_LOGOUT);
            } else {
                toast.error(SERVER_ERROR);
            }
        } catch (error) {
            throw new Error(`Error en el logout de usuario ${error.message}`);
        }
    }

    return { register, login, logout }
}