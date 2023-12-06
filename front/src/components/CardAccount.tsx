"use client"

import Image from "next/image"

export const CardAccount = ({account, idUser}: any) => {
    const valueTranfer = parseFloat(account.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})  

    return (
        <div className="bg-blue-400 hover:bg-blue-700 hover:shadow-xl h-28 hover:shadow-slate-700/50 duration-500 w-full  p-4 flex items-center gap-4 rounded-md">
            <Image className="border rounded-full w-20 h-20" alt="" src="" />
            <div className="grid grid-cols-1 w-8/12">
                <p className="text-black font-semibold">{idUser == account.sendAccount.id ? account.receiveAccount.name : account.sendAccount.name }</p>
                <span className="text-gray-700">{idUser == account.sendAccount.id ? "Dinheiro enviado" : "Dinheiro recebido"}</span>
            </div>
            <p className={idUser == account.sendAccount.id ? "text-red-600 w-2/12" : "text-lime-700 w-2/12"} >{idUser == account.sendAccount.id ? `- ${valueTranfer}` : `+ ${valueTranfer}` }</p>
        </div>
    )
}