import { SESSION_RECOVER, USER, USER_LOGIN, USER_LOGOUT, USER_REGISTER, WORKER_REGISTER } from "@/configs/api-routes-config";

export const user = async (authToken) => {
    try {
        const res = await fetch(USER, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse
        }
        
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

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response
        }
        
        return response;

    } catch (error) {
        return { status: 500 }
    }
}

export const workerRegister = async (userData) => {
    try {
        const res = await fetch(WORKER_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response
        }
        
        return response;

    } catch (error) {
        return { status: 500 }
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

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response
        }
        
        return response;

    } catch (error) {
        return { status: 500 }
    }
}

export const userLogout = async (authToken) => {
    try {
        const res = await fetch(USER_LOGOUT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse
        }
        
        return response;

    } catch (error) {
        return { status: 500 }
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
        return { status: 500 }
    }
}