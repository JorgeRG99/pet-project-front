import { UserSessionContext } from "@/context/userSession";
import { getAllPets } from "@/services/PetService";
import { useContext } from "react";

export function usePets() {
    const { userSession } = useContext(UserSessionContext);

    const allPets = async () => {
        const res = await getAllPets(userSession.token);
        return res.result
    }

    return { allPets }
}