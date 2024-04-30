import { getBreeds } from "@/services/BreedService"
import { useEffect, useState } from "react"

export function useBreeds() {
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        const breeds = async () => {
            const data = await getBreeds()
            setBreeds(data.response)
        }
        breeds()
    }, [])

    return { breeds }
}