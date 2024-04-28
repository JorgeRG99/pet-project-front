import { SERVER_ERROR } from "@/configs/user-feedback-config";
import { getDogs } from "@/services/PetService";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useDogs() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const getDogsFetch = async () => {
            const res = await getDogs();
    
            if (res === 500) {
                toast.error(SERVER_ERROR);
            } else {
                setDogs(res.result)
            }
        }
        
        getDogsFetch()
    }, [])


    return { dogs }
}