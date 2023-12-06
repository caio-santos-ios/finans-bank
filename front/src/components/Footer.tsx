"use client"

import "@/style/Footer.css"
import { PiWallet } from "react-icons/pi"
import { MdOutlineHistory, MdAccountCircle } from "react-icons/md"
import { FaRegCreditCard } from "react-icons/fa6"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { setCookie, getCookie } from "cookies-next"
import { api } from "@/service/api"

export const Footer = () => {
    const mySession = getCookie("select")
    const token = getCookie("token")
    const [select, setSelect] = useState(mySession ? mySession : "wailet")
    const minhaRef = useRef(null)
    const router = useRouter()
    
    const mySelect = (event: any) => {
        setSelect(event.currentTarget.id)
        setCookie('select', event.currentTarget.id)
        router.push(`/${event.currentTarget.id}`)
    }
    
    useEffect(() => {
        const req = async () => {
            try {
              const res = await api.get("/accounts", { headers: { Authorization: `Bearer ${token}` } })
              console.log(res)
            } catch (error) {}
        }
        req()
    }, [])

    return(
        <>
            <footer className="min-w-full absolute bottom-0 flex justify-center">
                <div ref={minhaRef} className="py-16 w-full md:w-[45rem] h-full flex justify-evenly">
                    <button id="wailet" onClick={mySelect} className={select == "wailet" ? "btn_icons text-blue-500" : "btn_icons"}>
                        <PiWallet size={35} />
                        <p>Carteira</p>
                    </button>
                    <button id="historic" onClick={mySelect} className={select == "historic" ? "btn_icons text-blue-500" : "btn_icons"}>
                        <MdOutlineHistory size={35} />
                        <p>Historico</p>
                    </button>
                    <button id="account" onClick={mySelect} className={select == "account" ? "btn_icons text-blue-500" : "btn_icons"}>
                        <MdAccountCircle size={35} />
                        <p>Conta</p>
                    </button>
                </div>
            </footer>
        </>
    )
}