import { userLogin, userRegister } from "@/services/AuthService";
import { useUserSession } from "./useUserSession";
import { StorageManager } from "@/utils/utility-classes/storage-manager";
import { AUTH_TOKEN_STORAGE_KEY } from "@/configs/api-routes-config";

export function useAuth() {
    const { setUser } = useUserSession()

    const register = async (userData) => {
        try {
            const res = userRegister(userData)
            if(res !== 500) setUser(res.response.userData, res.response.token)
        } catch (error) {
            throw new Error(`Error en el registro de usuario ${error.message}`);
        }
    }

    const login = async (credentials, remember) => {
        try {
            const res = await userLogin(credentials)
            if(res !== 500) {
                setUser(res.response.userData, res.response.token)
                if(remember) StorageManager.set(AUTH_TOKEN_STORAGE_KEY, res.response.token)
            } 
        } catch (error) {
            throw new Error(`Error en el login de usuario ${error.message}`);
        }
    }

    return { register, login }
}