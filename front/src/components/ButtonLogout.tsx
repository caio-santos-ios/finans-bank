"use client"

import { CiLogout } from "react-icons/ci";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const ButtonLogout = () => {
    const router = useRouter()

    const logout = () => {
        deleteCookie("token")
        deleteCookie("select")
        router.push("/login")
    }
    return(
        <button type="button" onClick={() => logout()} className="text-red-500 flex justify-around items-center gap-1 p-2">
            <CiLogout size={30} />
            Sair
        </button>
    )
}
