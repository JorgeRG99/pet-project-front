import { SERVER_ERROR, SERVER_VALIDATION_ERROR, SUCCESSFUL_PET_REGISTER, SUCCESSFUL_PET_UPDATE } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { deletePet, getAllPets, registerPet, updatePet } from "@/services/PetService";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { useContext } from "react";
import { toast } from "sonner";

export function usePets() {
    const { userSession } = useContext(UserSessionContext);

    const allPets = async () => {
        const res = await getAllPets(userSession.token);
        return res.result
    }

    const petRegister = async (data, setPetsData) => {
        const res = await registerPet(userSession.token, data)
        console.log(res)
        if(res.status === 201){
            setPetsData(prevState => [...prevState, data])
            toast.info(SUCCESSFUL_PET_REGISTER);
        } else if (res.status < 500) {
            toast.error(SERVER_VALIDATION_ERROR);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const petUpdate = async (data, setPetsData, petId) => {
        const formattedData = convertKeysToSnakeCase({...data, weight: `${data.weight} kg`})
        const res = await updatePet(userSession.token, formattedData, petId)
        if(res.status === 200){
            setPetsData(prevState => {
                const petToUpdate = prevState.find(pet => pet.id === petId)
                const updatedPet = {...petToUpdate, ...formattedData}
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

        if(res.status === 200){
            setPetsData(prevState => prevState.filter(pet => pet.id !== petId))
            toast.info(SUCCESSFUL_PET_UPDATE);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    return { allPets, petUpdate, petDelete, petRegister }
}