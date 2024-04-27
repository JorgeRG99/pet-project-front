import { MONTHS } from "@/configs/assets-config";

export function userSince(date) {
    const year = date.slice(0, 4);
    const month = date.charAt(6);

    return [MONTHS[month - 1], year];
}