import { AVAILABLE_HOURS, DELETE_TRAINING, FULL_DATES, SCHEDULE_TRAINING, TRAINING_PANEL, YOUR_TRAINING } from "@/configs/api-routes-config";

export const fullDates = async (token) => {
    try {
        const res = await fetch(FULL_DATES, {
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

export const availableHours = async (token, date) => {
    try {
        const res = await fetch(`${AVAILABLE_HOURS}?date=${date}`, {
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

export const createTrainingBooking = async (bookingData, token) => {
    try {
        const res = await fetch(SCHEDULE_TRAINING, {
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

export const getYourTrainings = async (token) => {
    try {
        const res = await fetch(YOUR_TRAINING, {
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

export const getTrainingPanel = async (token) => {
    try {
        const res = await fetch(TRAINING_PANEL, {
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

export const deleteTraining = async (token, id) => {
    try {
        const res = await fetch(DELETE_TRAINING, {
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