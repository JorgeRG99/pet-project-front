import { CATS, DOGS } from "@/configs/api-routes-config";

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