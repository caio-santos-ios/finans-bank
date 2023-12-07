"use client"

import { CardAccount } from "./CardAccount"

interface HistoricProps {
    listHistoric: any[],
    idUser: number
}

export const HistoricList = ({listHistoric, idUser}: HistoricProps) => {
    
    return (
        <ul className="w-full h-[87vh] md:w-[45rem] flex flex-col gap-4 py-8 px-4 overflow-y-auto">
            {
                listHistoric.length > 0 ?
                listHistoric.map((account: any) => <CardAccount key={account.id} account={account} idUser={idUser} />)
                :
                <div className="border-dashed border-2 border-blue-500 h-[70vh] flex justify-center items-center">
                    <h1 className="text-blue-500 text-center font-semibold text-4xl">Sem Transações</h1>
                </div>
            }
        </ul>
    )
}