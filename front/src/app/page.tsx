import { Historic } from "@/components/Historic";
import { BASE_URL } from "@/service/api";
import { cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { HeaderHistoric } from "@/components/HeaderHistoric";

const listHistoric = async (token: string, id: string) => {
  const response = await fetch(`${BASE_URL}/transfers`, { headers: { Authorization: `Bearer ${token}` } })
  return response.json()
} 

export default async function Home() {
  
  return (
    <>
      <HeaderHistoric />
      <main className="body">
      <section className="section h-5/6 grid grid-cols-1 justify-items-center content-center">
          <Image alt="foto-da-carteira" src={photoAnimation} />
          <Link href="/historic" className="bg-blue-600 text-white hover:bg-transparent hover:text-blue-500 border border-blue-500 duration-500 flex justify-center items-center w-32 h-32 rounded-full">
            <h1 className="font-bold text-xl">Começar</h1>
            <GoArrowUpRight size={30} />
          </Link>
        </section>
      </main>
    </>
  )
}
