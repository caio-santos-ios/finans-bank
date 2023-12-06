"use client"

import Image from "next/image";

interface EditProfileProps {
    token: string;
    idUser: number;
}

export const EditProfile = ({token, idUser}: EditProfileProps) => {
    console.log(token)
    return (
        <form>
            <input type="text" />
        </form>
    )
}