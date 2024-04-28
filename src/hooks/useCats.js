import { SERVER_ERROR } from "@/configs/user-feedback-config";
import { getCats } from "@/services/PetService";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useCats() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCatsFetch = async () => {
            const res = await getCats();
    
            if (res === 500) {
                toast.error(SERVER_ERROR);
            } else {
                setCats(res.result)
            }
        }
        
        getCatsFetch()
    }, [])


    return { cats }
}