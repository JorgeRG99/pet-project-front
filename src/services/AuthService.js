import { 
    USER_REGISTER, USER_LOGIN, USER} from '../../config'

export const user = async (authToken) => {
    try {
        const res = await fetch(USER, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        });
        if (!res.ok) throw new Error(`Error en la solicitud ${res.status}`)

        const response =  await res.json();

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
        if (!res.ok) throw new Error(`Error en la solicitud ${res.status}`);

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

        if (!res.ok) throw new Error(`Error en la solicitud ${res.status}`);

        const response = res.json()

        return response;

    } catch (error) {
        throw new Error(`Error en el login de usuario ${error.message}`);
    }
}

