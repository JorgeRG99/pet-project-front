import { SERVER_ERROR } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { availableHours } from "@/services/TrainingService";
import { useContext } from "react";
import { toast } from "sonner";

export function useTrainingAvailableHours() {
    const { userSession } = useContext(UserSessionContext)

    const getAvailableHoursByDate = async (date) => {
        const res = await availableHours(userSession.token, date)

        if (res.status === 500) {
            toast.error(SERVER_ERROR);
        } else {
            return res
        }
    }

    
    return { getAvailableHoursByDate }
}