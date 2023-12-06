"use client"

import Image from "next/image";
import { GoPlus } from "react-icons/go";

export const SendMoney = () => {  

    return(
        <div className="w-full sm:flex sm:w-[35rem] py-16">
            <h1 className="text-start ml-8 my-4 sm:hidden">Enviar dinheiro</h1>
            <div className="flex justify-evenly w-full gap-2 overflow-auto card_person">
                <div className="grid justify-items-center">
                    <button className="border border-gray-600 rounded-full p-5">
                        <GoPlus size={30} />
                    </button>
                    <p>
                        Adicionar
                    </p>
                </div>
                {
                    [1, 2, 3, 4].map((el: number) => {
                        return(
                            <div key={el} className="grid justify-items-center">
                                <Image className="border border-gray-600 rounded-full w-20 h-20" alt="" src="" />
                                 <p>
                                    Adicionar
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
