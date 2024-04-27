import { AUTH_TOKEN_STORAGE_KEY } from "@/configs/api-routes-config";
import { UserSessionContext } from "@/context/userSession";
import { StorageManager } from "@/utils/utility-classes/storage-manager";
import { useContext } from "react";

export function useUserSession() {
    const { userSession, setUserSession } = useContext(UserSessionContext)

    const setUser = (user, token) => setUserSession({ ...user, token })

    const unsetUser = () => {
        setUserSession(null)
        StorageManager.remove(AUTH_TOKEN_STORAGE_KEY)
    }

    return { userSession, setUser, unsetUser }
}