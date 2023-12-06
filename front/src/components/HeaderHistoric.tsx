"use client"

import { IoReturnUpBackOutline, IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export const HeaderHistoric = () => {
    return(
        <header className="bg-blue-500 flex flex-col items-center">
            <nav className="w-11/12 md:w-[43rem] py-10 flex justify-between">
                <h1 className="font-light text-5xl">Historico</h1>             
                <Link href="/wailet">
                    <IoReturnUpBackOutline size={35} />
                </Link>   
            </nav>
        </header>
    )
}