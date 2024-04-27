import { CHANGE_PASSWORD, USER } from "@/configs/api-routes-config";

export const userUpdate = async (authToken, newData) => {
    try {
        const res = await fetch(USER, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(newData),
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

export const userDelete = async (authToken, password) => {
    try {
        const res = await fetch(USER, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ password }),
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

export const userChangePassword = async (authToken, data) => {
    try {
        const res = await fetch(CHANGE_PASSWORD, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(data),
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