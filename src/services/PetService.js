import { ADD_PET, ALL_PETS, CATS, DELETE_PET, DOGS, UPDATE_PET } from "@/configs/api-routes-config";

export const getAllPets = async (token) => {
    try {
        const res = await fetch(ALL_PETS, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) return 500;

        const response = await res.json()
        return response.response;
    } catch (error) {
        return { status: 500 }
    }
}
export const getDogs = async () => {
    try {
        const res = await fetch(DOGS);

        if (!res.ok) return 500;

        const response = await res.json()
        return response.response;
    } catch (error) {
        return { status: 500 }
    }
}

export const getCats = async () => {
    try {
        const res = await fetch(CATS);

        if (!res.ok) return 500;

        const response = await res.json()
        return response.response;
    } catch (error) {
        return { status: 500 }
    }
}

export const registerPet = async (token, data) => {
    try {
        const res = await fetch(ADD_PET, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
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

export const updatePet = async (token, data, petId) => {
    try {
        const res = await fetch(UPDATE_PET, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ ...data, id: petId }),
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

export const deletePet = async (token, petId) => {
    try {
        const res = await fetch(DELETE_PET, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id: petId }),
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