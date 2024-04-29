import { cancelAdoption, requestAdoption, yourAdoptions } from "@/services/AdoptionService";
import { useUserSession } from "./useUserSession";
import { toast } from "sonner";
import { ADOPTIONS_PENDING, SERVER_ERROR, SUCCESSFUL_ADOPTION } from "@/configs/user-feedback-config";

export function useAdoption() {
    const { userSession } = useUserSession()

    const adopt = async (data) => {
        const res = await requestAdoption(userSession.token, data)

        if (res.status === 201) {
            toast.info(SUCCESSFUL_ADOPTION);
        } else if (res.status === 409) {
            toast.error(ADOPTIONS_PENDING);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const yourAdoptionsFetch = async () => {
        const res = await yourAdoptions(userSession.token)
        return res.response
    }

    const adoptionCancel = async (id) => {
        const res = await cancelAdoption(userSession.token, id)
        return res
    }

    return { adopt, yourAdoptionsFetch, adoptionCancel }
}