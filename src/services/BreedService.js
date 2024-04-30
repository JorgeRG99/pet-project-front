import { BREEDS } from "@/configs/api-routes-config";

export const getBreeds = async () => {
    try {
        const res = await fetch(BREEDS);
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