import { SERVER_ERROR, SUCCESSFUL_TRAINING, SUCCESSFUL_TRAINING_DELETE, } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { createTrainingBooking, deleteTraining, getTrainingPanel, getYourTrainings } from "@/services/TrainingService";
import { useContext } from "react";
import { toast } from "sonner";

export function useTraining() {
    const { userSession } = useContext(UserSessionContext)

    const yourTrainings = async () => {
        const res = await getYourTrainings(userSession.token)

        if (res.status === 200) {
            return res.response
        } else {
            toast.error(SERVER_ERROR);
            return []
        }
    }

    const addTraining = async (booking) => {
        const res = await createTrainingBooking(booking, userSession.token)

        if (res.status === 201) {
            toast.info(SUCCESSFUL_TRAINING);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const trainingDelete = async (trainingId, setTrainings) => {
        const res = await deleteTraining(userSession.token, trainingId)

        if (res.status === 201) {
            setTrainings(prevState => prevState.filter(training => training.id !== trainingId))
            toast.info(SUCCESSFUL_TRAINING_DELETE);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const trainingPanel = async () => {
        const res = await getTrainingPanel(userSession.token)

        if (res.status === 200) {
            return res.response
        } else {
            toast.error(SERVER_ERROR);
            return []
        }
    }

    return { addTraining, yourTrainings, trainingDelete, trainingPanel }
}