import { UserSessionContext } from "@/context/userSession";
import { unavailableDates } from "@/services/BookingService";
import { useContext, useEffect, useState } from "react";

export function useHotelUnavailableDates() {
    const [hotelUnavailableDates, setHotelUnavailableDates] = useState([]);
    const { userSession } = useContext(UserSessionContext)

    useEffect(() => {
        const getUnavailableDates = async () => {
            const dates = await unavailableDates(userSession.token)
            setHotelUnavailableDates(dates.response.result)
        }

        getUnavailableDates()
    }, [])
    return { hotelUnavailableDates }
}