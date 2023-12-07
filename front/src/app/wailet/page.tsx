import { cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { BASE_URL } from "@/service/api"
import { ContainerTransfer } from "@/components/Transfer"
import { SendMoney } from "@/components/SendMoney"
import Image from "next/image"
import { VerifyLogged } from "@/components/VerifyLogged"

export const dynamic = "force-dynamic"

const account = async (token: string) => {
  const response = await fetch(`${BASE_URL}/accounts`, { headers: { Authorization: `Bearer ${token}`, }})
  return response.json();
}

export default async function Wailet() {
  const myUser = VerifyLogged()

  const myAccount = await account(myUser.token!)

  const myBalance = parseFloat(myAccount.balance).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})  

  return (
    <>
      <header className="header_section">
            <nav className="nav_section flex gap-4 items-center text-white"> 
              <Image width={600} height={400} className="border border-gray-600 rounded-full w-11 h-11" alt="foto-de-perfil" src={myAccount.photoProfile} />
              <h2 className="font-medium text-xl">{myAccount.name}</h2>
            </nav>
      </header>
      <main className="body">
        <section className="grid grid-cols-1 gap-4 justify-items-center pt-48">
          <div className="w-full sm:w-96 text-center">
              <h1 className="text-5xl">{myBalance}</h1>
              <h4>Meu balanço</h4>
          </div>
          <ContainerTransfer />
          <SendMoney />
        </section>
      </main>
    </>
  )
}
