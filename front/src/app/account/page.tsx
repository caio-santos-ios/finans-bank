import { BASE_URL } from "@/service/api"
import Image from "next/image"
import { ButtonEditProfile } from "@/components/ButtonEditeProfile"
import { ButtonLogout } from "@/components/ButtonLogout"
import { VerifyLogged } from "@/components/VerifyLogged"

const account = async (token: string) => {
  const response = await fetch(`${BASE_URL}/accounts`, { headers: { Authorization: `Bearer ${token}`, }})
  return response.json();
};

export default async function Account() {
  const myUser = VerifyLogged()

  const myAccount = await account(myUser.token!)
  
  return (
    <>
      <main className="body">
        <section className="section grid grid-cols-1 justify-items-center gap-1">
            <div className="w-full md:w-[45rem] grid grid-cols-1 justify-items-center gap-2 py-20">
              <Image width={600} height={400} className="border border-gray-600 rounded-full w-60 h-60" alt="foto-de-perfil" src={myAccount.photoProfile} />
              <h2 className="font-light text-7xl">{myAccount.name}</h2>
              <h2 className="font-light text-xl">{myAccount.email}</h2>
              <ButtonEditProfile />
            </div>
            <ButtonLogout />
        </section>
      </main>
    </>
  )
}
