"use client"

import { GoArrowUpRight, GoArrowDownLeft, GoArrowSwitch } from "react-icons/go"

export const ContainerTransfer = () => {  

    return(
        <div className="w-full sm:w-96 flex justify-evenly py-4">
            <div className="grid justify-items-center">
                <button className="border border-gray-600 rounded-full p-10">
                    <GoArrowUpRight size={35} />
                </button>
                <p>
                    Enviar
                </p>
            </div>

            <div className="grid justify-items-center">
                <button className="border border-gray-600 rounded-full p-10">
                    <GoArrowDownLeft size={35} />
                </button>
                <p>
                    Receber
                </p>
            </div> 
        </div>
    )
}
