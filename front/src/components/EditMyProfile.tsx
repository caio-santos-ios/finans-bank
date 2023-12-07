"use client"

import { TAccount } from "@/@types/accounts";
import { api } from "@/service/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DotSpinner } from '@uiball/loaders'

interface EditProfileProps {
    token: string;
    idUser: number;
}

export const EditMyProfile = ({token, idUser}: EditProfileProps) => {
    const { register, handleSubmit } = useForm()
    const [user, setUser] = useState<TAccount>()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    useEffect(() => {
        const req = async () => {
            try {
                const res = await api.get(`/accounts/${idUser}`, { headers: { Authorization: `Bearer ${token}` } })
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [])

    const updateProfile = async (data: any) => {
        setLoading(true)

        if(data.email == '' && data.name == '') return

        if(data.email != '') data = { email: data.email }
        if(data.name != '') data = { name: data.name } 
        
        try {
            await api.patch(`/accounts/${idUser}`, data, { headers: { Authorization: `Bearer ${token}` } })
            router.push("/account")
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    return (
        <form className="form_login md:w-[35rem] gap-4" onSubmit={handleSubmit(updateProfile)}>
            <label htmlFor="" className="w-full md:w-[30] flex flex-col gap-">
                Nome
                <input className="input_login w-full h-12 border border-blue-500 px-4" defaultValue={user && user.name} {...register("name")} type="text" />
            </label>
            <label htmlFor="" className="w-full md:w-[30] flex flex-col gap-1">
                Email
                <input className="input_login w-full h-12 border border-blue-500 px-4" defaultValue={user && user.email} {...register("email")} type="text" />
            </label>
            <div className="w-full flex justify-between">
                <button className="p-4 bg-red-500 border-red-500 text-white rounded-[6rem] h-16">Cancelar</button>
                {
                    loading ?
                    <>
                    <button className="p-4 bg-blue-500 border-blue-500 text-white rounded-[6rem] w-44 flex justify-center items-center h-16"><DotSpinner color="white"/></button>
                    </>
                    :
                    <button className="p-4 bg-blue-500 border-blue-500 text-white rounded-[6rem] w-44 h-16">Salvar Alteração</button>
                }

            </div>
        </form>
    )
}