import { useCallback } from "react";
import { useNavigate } from "react-router";

export const useSafeNavigate = () => {
    const navigate = useNavigate()

    const safeNavigate = useCallback((link : string) => {
        try {
            navigate(link)
        } catch (error) {
            console.error(`Navigation to ${link} failed:`, error)
            window.location.href = link
        }
    }, [navigate])
    
    return safeNavigate

}
