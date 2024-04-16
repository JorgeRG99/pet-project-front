import { userLogin, userRegister } from "@/services/AuthService";

export function useAuth() {

    const register = async (userData) => {
        try {
            return await userRegister(userData)
        } catch (error) {
            throw new Error(`Error en el registro de usuario ${error.message}`);
        }
    }

    const login = async (credentials) => {
        try {
            return await userLogin(credentials)
        } catch (error) {
            throw new Error(`Error en el login de usuario ${error.message}`);
        }
    }

    return { register, login }
}