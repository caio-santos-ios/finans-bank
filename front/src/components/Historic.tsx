"use client"

import { CardAccount } from "./CardAccount"

interface HistoricProps {
    listHistoric: any[]
}

export const Historic = ({listHistoric, idUser}: any) => {
    
    return (
        <ul className="w-full h-[87vh] md:w-[45rem] flex flex-col gap-4 py-8 px-4 overflow-y-auto">
            {
                listHistoric.length > 0 && listHistoric.map((account: any) => <CardAccount account={account} idUser={idUser} />)
            }
        </ul>
    )
}