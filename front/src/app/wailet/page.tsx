import { cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { BASE_URL } from "@/service/api"
import { ContainerTransfer } from "@/components/Transfer"
import { SendMoney } from "@/components/SendMoney"

const account = async (token: string) => {
  const response = await fetch(`${BASE_URL}/accounts`, { headers: { Authorization: `Bearer ${token}`, }})
  return response.json();
};

export default async function Wailet() {
  const user: string | undefined = getCookie('token', { cookies })
  const decodedUser = decodeURIComponent(user!)
  const myUser = JSON.parse(decodedUser)

  const myAccount = await account(myUser.token!)

  const myBalance = parseFloat(myAccount.balance).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})  

  return (
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
  )
}
