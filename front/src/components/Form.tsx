"use client"

import { TRegister } from "@/@types/accounts";
import Link from "next/link"
import { useForm } from "react-hook-form"
import { MdAccountCircle, MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { schemaLogin, schemaRegister } from "@/schema/account.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import "@/style/Form.css"
import { api } from "@/service/api"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react"
import { setCookie } from 'cookies-next'
import { useRouter } from "next/navigation"
import { DotSpinner } from '@uiball/loaders'
import { IoIosEyeOff, IoIosEye } from "react-icons/io"

interface FormProps {
    login: boolean
}

export const Form = ({login}: FormProps) => {
    const mySchema = login ? schemaLogin : schemaRegister
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TRegister>({resolver: zodResolver(mySchema)})
    const [loading, setLoading] = useState(false)
    const [passwordOff, setPasswordOff] = useState(true)
    const router = useRouter()

    const req = async (data: any) => {
        setLoading(true)
        if(login){
            try {
                const res = await api.post("/login", data)
                setCookie('token', res.data)
                router.push("/wailet")
                } catch (error: any) { 
                    setLoading(false)
                    if(error.response.status == 401) return toast.error("Email ou senha incorretos")
                }
            }else{
                try {
                    const res = await api.post("/accounts", data)
                    reset()
                    toast.success(<div>Conta crida <Link className="p-2 bg-blue-500 text-white rounded-md ml-4" href="/login">Fazer Login</Link></div>)
                } catch (error: any) { 
                    setLoading(false)
                    if(error.response.status == 409) return toast.error("Email inválido")
                }
        }
    }

    return(
       <>
            <ToastContainer theme="colored" position="top-right" autoClose={5000} />

            {
                login ? 
                <form onSubmit={handleSubmit(req)} className="form_login ">
                    <div className="my-8 text-gray-700 text-center">
                        <h1 className="font-bold text-4xl">Login</h1>
                        <p className="text-center">Não tem conta? <Link href="/register" className="text-blue-500 font-medium">Inscrever-se</Link></p>
                    </div>           

                    <div className={errors.email ? "input_login_erro border-red-500" : "input_login_erro border-blue-500"}>
                        <div className={errors.email ? "div_login_erro text-red-500" : "div_login_erro text-blue-500"}>
                            <MdEmail size={30} />
                        </div>
                        <input {...register("email")} placeholder="Email" type="texte" className={errors.email ? "input_login text-red-500" : "input_login text-blue-500"} />
                    </div>
                    { errors.email ? <p className="h-8 text-red-500 text-start w-full">{errors.email.message}</p> : <p className="h-8"></p> }

                    <div className={errors.password ? "input_login_erro border-red-500" : "input_login_erro border-blue-500"}>
                        <div className={errors.password ? "div_login_erro text-red-500" : "div_login_erro text-blue-500"}    >
                            <RiLockPasswordFill size={30} />
                        </div>
                        <input {...register("password")} placeholder="Senha" type={passwordOff ? "password" : "text"} className={errors.password ? "input_login text-red-500" : "input_login text-blue-500"} />
                        { 
                            passwordOff ? 
                            <button onClick={() => setPasswordOff(false)} type="button" className="absolute right-4 self-center text-blue-500">
                                <IoIosEyeOff size={30} />
                            </button> 
                            : 
                            <button onClick={() => setPasswordOff(true)} type="button" className="absolute right-4 self-center text-blue-500">
                                <IoIosEye size={30} />
                            </button>
                        }
                    </div>
                    { errors.password ? <p className="h-8 text-red-500 text-start w-full">{errors.password.message}</p> : <p className="h-8"></p> }  
                    {
                        loading ? 
                        <button className="btn_login"><DotSpinner color="white"/></button>
                        :
                        <button className="btn_login">Entrar</button>
                    }          
                </form>
            : 
                <form onSubmit={handleSubmit(req)} className="form_login">
                    <div className="my-8 text-gray-700">
                        <h1 className="font-bold text-4xl">Inscrever-se</h1>
                        <p className="text-center">Já tem conta? <Link href="/login" className="text-blue-500 font-medium">Login</Link></p>
                    </div>
                    <div className={errors.name ? "input_login_erro border-red-500" : "input_login_erro border-blue-500"}>
                        <div className={errors.name ? "div_login_erro text-red-500" : "div_login_erro text-blue-500"}>
                            <MdAccountCircle size={30} />
                        </div>
                        <input {...register("name")} placeholder="Nome" type="text" className={errors.name ? "input_login placeholder:text-red-500" : "input_login text-blue-500"} />
                    </div>
                    { errors.name ? <p className="h-8 text-red-500 text-start w-full">{errors.name.message}</p> : <p className="h-8"></p> }

                    <div className={errors.email ? "input_login_erro border-red-500" : "input_login_erro border-blue-500"}>
                        <div className={errors.email ? "div_login_erro text-red-500" : "div_login_erro text-blue-500"}>
                            <MdEmail size={30} />
                        </div>
                        <input {...register("email")} placeholder="Email" type="email" className={errors.email ? "input_login placeholder:text-red-500" : "input_login text-blue-500"} />
                    </div>
                    { errors.email ? <p className="h-8 text-red-500 text-start w-full">{errors.email.message}</p> : <p className="h-8"></p> }

                    <div className={errors.password ? "input_login_erro border-red-500" : "input_login_erro border-blue-500"}>
                        <div className={errors.password ? "div_login_erro text-red-500" : "div_login_erro text-blue-500"}>
                            <RiLockPasswordFill size={30} />
                        </div>
                        <input {...register("password")} placeholder="Senha" type={passwordOff ? "password" : "text"} className={errors.password ? "input_login placeholder:text-red-500" : "input_login text-blue-500"} />
                        { 
                            passwordOff ? 
                            <button onClick={() => setPasswordOff(false)} type="button" className="absolute right-4 self-center text-blue-500">
                                <IoIosEyeOff size={30} />
                            </button> 
                            : 
                            <button onClick={() => setPasswordOff(true)} type="button" className="absolute right-4 self-center text-blue-500">
                                <IoIosEye size={30} />
                            </button>
                        }
                    </div>            
                    { errors.password ? <p className="h-8 text-red-500 text-start w-full">{errors.password.message}</p> : <p className="h-8"></p> }
                    {
                        loading ? 
                        <button className="btn_login"><DotSpinner color="white"/></button>
                        :
                        <button className="btn_login">Cadastrar</button>
                    }
                </form>
            }
       </>
    )
}
