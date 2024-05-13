import { SERVER_ERROR, SERVER_VALIDATION_ERROR, SUCCESSFUL_PET_REGISTER, SUCCESSFUL_PET_UPDATE } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { deletePet, getYourCats, getYourDogs, getYourPets, getYourPetsWithDeleted, registerPet, updatePet } from "@/services/ExternalPetsService";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { useContext } from "react";
import { toast } from "sonner";

export function useExternalPets(type = undefined) {
    const { userSession } = useContext(UserSessionContext);

    const yourPets = async () => {
        const res = await getYourPets(userSession.token);

        if (res.status === 200) {
            return res.response.result
        } else {
            toast.error(SERVER_ERROR);
            return []
        }
    }

    const yourPetsWithDeleted = async () => {
        const res = await getYourPetsWithDeleted(userSession.token);

        if (res.status === 200) {
            return res.response.result
        } else {
            toast.error(SERVER_ERROR);
            return []
        }
    }

    const yourPetsToBooking = async () => {
        if (type === 'cats') {
            const res = await getYourCats(userSession.token);
            return res.result
        } else {
            const res = await getYourDogs(userSession.token);
            return res.result
        }
    }

    const petRegister = async (data, setPetsData) => {
        const res = await registerPet(userSession.token, data)
        if (res.status === 201) {
            setPetsData(prevState => [...prevState, data])
            toast.info(SUCCESSFUL_PET_REGISTER);
        } else if (res.status < 500) {
            toast.error(SERVER_VALIDATION_ERROR);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const petUpdate = async (data, setPetsData, petId) => {
        const formattedData = convertKeysToSnakeCase({ ...data, weight: `${data.weight} kg` })
        const res = await updatePet(userSession.token, formattedData, petId)
        if (res.status === 200) {
            setPetsData(prevState => {
                const petToUpdate = prevState.find(pet => pet.id === petId)
                const updatedPet = { ...petToUpdate, ...formattedData }
                return [updatedPet, ...prevState.filter(pet => pet.id !== petId)]
            })
            toast.info(SUCCESSFUL_PET_UPDATE);
        } else if (res.status < 500) {
            toast.error(SERVER_VALIDATION_ERROR);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const petDelete = async (petId, setPetsData) => {
        const res = await deletePet(userSession.token, petId)

        if (res.status === 200) {
            setPetsData(prevState => prevState.filter(pet => pet.id !== petId))
            toast.info(SUCCESSFUL_PET_UPDATE);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    return { petUpdate, petDelete, petRegister, yourPets, yourPetsToBooking, yourPetsWithDeleted }
}