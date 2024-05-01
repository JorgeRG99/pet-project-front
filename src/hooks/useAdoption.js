import { acceptAdoption, cancelAdoption, confirmAdoption, getAllAdoptions, requestAdoption, yourAdoptions } from "@/services/AdoptionService";
import { useUserSession } from "./useUserSession";
import { toast } from "sonner";
import { ADOPTIONS_PENDING, SERVER_ERROR, SUCCESSFUL_ADOPTION } from "@/configs/user-feedback-config";

export function useAdoption() {
    const { userSession } = useUserSession()

    const adoptionAccept = async (id) => {
        const res = await acceptAdoption(userSession.token, id)
        return res
    }

    const adoptionConfirm = async (id) => {
        const res = await confirmAdoption(userSession.token, id)
        return res
    }

    const allAdoptions = async () => {
        const res = await getAllAdoptions(userSession.token)
        return res.response.result
    }

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

    return { adopt, yourAdoptionsFetch, adoptionCancel, allAdoptions, adoptionAccept, adoptionConfirm }
}