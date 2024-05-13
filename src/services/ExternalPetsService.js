import { ADD_YOUR_PET, DELETE_YOUR_PET, UPDATE_YOUR_PET, YOUR_CATS, YOUR_DOGS, YOUR_PETS, YOUR_PETS_WITH_DELETED } from "@/configs/api-routes-config";


export const getYourPets = async (token) => {
    try {
        const res = await fetch(YOUR_PETS, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response
        }

        return response
    } catch (error) {
        return { status: 500 }
    }
}

export const getYourPetsWithDeleted = async (token) => {
    try {
        const res = await fetch(YOUR_PETS_WITH_DELETED, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response
        }

        return response
    } catch (error) {
        return { status: 500 }
    }
}

export const getYourCats = async (token) => {
    try {
        const res = await fetch(YOUR_CATS, {
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

export const getYourDogs = async (token) => {
    try {
        const res = await fetch(YOUR_DOGS, {
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

export const registerPet = async (token, data) => {
    try {
        const res = await fetch(ADD_YOUR_PET, {
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
        const res = await fetch(UPDATE_YOUR_PET, {
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
        const res = await fetch(DELETE_YOUR_PET, {
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