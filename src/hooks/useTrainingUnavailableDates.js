import { UserSessionContext } from "@/context/userSession";
import { fullDates } from "@/services/TrainingService";
import { useContext } from "react";

export function useTrainingUnavailableDates() {
    const { userSession } = useContext(UserSessionContext)

    const getFullDates = async () => {
        const dates = await fullDates(userSession.token)
        return dates.response.result.map(data => data.date)
    }
    
    return { getFullDates }
}