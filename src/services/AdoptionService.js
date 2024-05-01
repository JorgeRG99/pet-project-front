import { ACCEPT_ADOPTION, ALL_ADOPTIONS, CANCEL_ADOPTION, CONFIRM_ADOPTION, REQUEST_ADOPTION, YOUR_ADOPTIONS } from "@/configs/api-routes-config";

export const getAllAdoptions = async (token) => {
    try {
        const res = await fetch(ALL_ADOPTIONS, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
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
export const requestAdoption = async (token, data) => {
    try {
        const res = await fetch(REQUEST_ADOPTION, {
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

export const yourAdoptions = async (token) => {
    try {
        const res = await fetch(YOUR_ADOPTIONS, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response.result
        }

        return response;

    } catch (error) {
        return { status: 500 }
    }
}

export const cancelAdoption = async (token, id) => {
    try {
        const res = await fetch(CANCEL_ADOPTION, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id }),
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response.result
        }

        return response;

    } catch (error) {
        return { status: 500 }
    }
}

export const acceptAdoption = async (token, id) => {
    try {
        const res = await fetch(ACCEPT_ADOPTION, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id }),
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response.result
        }

        return response;

    } catch (error) {
        return { status: 500 }
    }
}

export const confirmAdoption = async (token, id) => {
    try {
        const res = await fetch(CONFIRM_ADOPTION, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id }),
        });

        const successfulResponse = await res.json()
        const response = {
            status: res.status,
            response: successfulResponse.response.result
        }

        return response;

    } catch (error) {
        return { status: 500 }
    }
}