import { BASE_URL } from "@/service/api";
import { cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { HistoricList } from "@/components/HistoricList";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Link from "next/link";
import { VerifyLogged } from "@/components/VerifyLogged";

const listHistoric = async (token: string) => {
  const response = await fetch(`${BASE_URL}/transfers`, { headers: { Authorization: `Bearer ${token}` } })
  return response.json()
} 

export default async function Historic() {
  const myUser = VerifyLogged()

  const myHistoric = await listHistoric(myUser.token)

  return (
    <>
      <header className="header_section">
            <nav className="w-11/12 md:w-[43rem] py-10 flex justify-between text-white">
                <h1 className="font-light text-5xl">Historico</h1>             
                <Link href="/wailet">
                    <IoReturnUpBackOutline size={35} />
                </Link>   
            </nav>
      </header>
      <main className="body">
        <main className="body">
        <section className="section flex justify-center">
            <HistoricList idUser={myUser.id} listHistoric={myHistoric} />
        </section>
      </main>
      </main>
    </>
  )
}
