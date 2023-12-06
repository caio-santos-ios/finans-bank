"use client"

import { GoArrowUpRight, GoArrowDownLeft, GoArrowSwitch } from "react-icons/go"

export const ContainerTransfer = () => {  

    return(
        <div className="w-full sm:w-[45rem] flex justify-evenly py-4">
            <div className="grid justify-items-center hover:text-blue-500">
                <button className="border border-gray-600 rounded-full p-10 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <GoArrowUpRight size={35} />
                </button>
                <p>
                    Enviar
                </p>
            </div>

            <div className="grid justify-items-center hover:text-blue-500">
                <button className="border border-gray-600 rounded-full p-10 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <GoArrowDownLeft size={35} />
                </button>
                <p>
                    Receber
                </p>
            </div> 
        </div>
    )
}
