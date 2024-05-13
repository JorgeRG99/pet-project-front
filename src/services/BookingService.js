import { ADD_CARE_SERVICE, DELETE_CARE_SERVICE, UNAVAILABLE_DATES, YOUR_CARE_SERVICES } from "@/configs/api-routes-config";

export const getYourBookings = async (token) => {
    try {
        const res = await fetch(YOUR_CARE_SERVICES, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
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

export const createBooking = async (bookingData, token) => {
    try {
        const res = await fetch(ADD_CARE_SERVICE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(bookingData),
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

export const unavailableDates = async (token) => {
    try {
        const res = await fetch(UNAVAILABLE_DATES, {
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

export const deleteBooking = async (token, id) => {
    try {
        const res = await fetch(DELETE_CARE_SERVICE, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id }),
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