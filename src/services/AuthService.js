import { SESSION_RECOVER, USER, USER_LOGIN, USER_REGISTER } from "@/configs/api-routes-config";

export const user = async (authToken) => {
    try {
        const res = await fetch(USER, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        });
        if (!res.ok) throw new Error(`Error en la solicitud ${res.status}`)

        const response = await res.json();

        return response;
    } catch (error) {
        throw new Error(`Error obteniendo datos del ususario de usuario ${error.message}`);
    }
}



export const userRegister = async (userData) => {
    try {
        const res = await fetch(USER_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!res.ok) return 500;

        const response = await res.json();

        return response;

    } catch (error) {
        throw new Error(`Error en el registro de usuario ${error.message}`);
    }
}

export const userLogin = async (userCredentials) => {
    try {
        const res = await fetch(USER_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCredentials),
        });

        if (!res.ok) return 500;

        const response = res.json()

        return response;

    } catch (error) {
        throw new Error(`Error en el login de usuario ${error.message}`);
    }
}

export const recoverSession = async (authToken) => {
    try {
        const res = await fetch(SESSION_RECOVER, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        });

        if (!res.ok) return 500;

        const response = res.json()

        return response;
    } catch (error) {
        throw new Error(`Error en la recuperación de datos del ususario de usuario ${error.message}`);
    }
}