"use client"

import { CardAccount } from "./CardAccount"

interface HistoricProps {
    listHistoric: any[]
}

export const Historic = ({listHistoric}: HistoricProps) => {
    return (
        <ul className="bg-slate-500 w-8 h-8">
            {listHistoric.map((el: any) => <CardAccount key={el} account={el}/>)}
        </ul>
    )
}