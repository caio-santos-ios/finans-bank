"use client"

import Link from "next/link";
import { FaPen } from "react-icons/fa";

export const ButtonEditProfile = () => <Link className="flex items-center justify-center gap-2 bg-blue-500 border border-blue-500 p-4 rounded-[5rem] w-40 text-white hover:bg-transparent hover:border-blue-500 hover:text-blue-500 duration-500" href="/edit_profile">Editar perfil <FaPen /></Link>
