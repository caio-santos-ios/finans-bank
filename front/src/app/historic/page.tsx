import { cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { BASE_URL } from "@/service/api"
import { ContainerTransfer } from "@/components/Transfer"
import { SendMoney } from "@/components/SendMoney"

const historic = async (token: string, id: number) => {
  const response = await fetch(`${BASE_URL}/accounts/${id}`, { headers: { Authorization: `Bearer ${token}` }})
  return response.json();
};

export default async function Historic() {
  const user: string | undefined = getCookie('token', { cookies })
  const decodedUser = decodeURIComponent(user!)
  const myUser = JSON.parse(decodedUser)

  const myHistoric = await historic(myUser.token, myUser.id)
  console.log(myHistoric)

  return (
    <main className="body">
      <section className="section">
        <Historic />
      </section>
    </main>
  )
}
