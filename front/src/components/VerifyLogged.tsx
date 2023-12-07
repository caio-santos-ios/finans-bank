import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const VerifyLogged = () => {
    const user: string | undefined = getCookie('token', { cookies })
  
    if(!user) redirect("/login")
  
    const decodedUser = decodeURIComponent(user!)
    const myUser = JSON.parse(decodedUser)

    return myUser  
}