import { AUTH_TOKEN_STORAGE_KEY } from "@/configs/api-routes-config"
import { UserSessionContext } from "@/context/userSession"
import { recoverSession } from "@/services/AuthService"
import { StorageManager } from "@/utils/utility-classes/storage-manager"
import { useContext, useEffect } from "react"

export function useRecoverSession() {
    const { userSession, setUserSession } = useContext(UserSessionContext)

    useEffect(() => {
        const setSession = async () => {
            const token = StorageManager.get(AUTH_TOKEN_STORAGE_KEY)
            if (token) {
                const session = await getSession(token)
                setUserSession({ ...session.response.userData, token })
            }
        }

        setSession()
    }, [])


    const getSession = async (token) => {
        const session = await recoverSession(token);
        return session;
    }

    return { userSession }
}