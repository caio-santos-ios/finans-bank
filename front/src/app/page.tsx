import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import photoAnimation from "@/assets/animation.png";

export default async function Home() {
  
  return (
    <>
      <main className="body">
      <section className="section h-5/6 grid grid-cols-1 justify-items-center content-center">
          <Image alt="foto-da-carteira" src={photoAnimation} />
          <Link href="/register" className="bg-blue-600 text-white hover:bg-transparent hover:text-blue-500 border border-blue-500 duration-500 flex justify-center items-center w-32 h-32 rounded-full">
            <h1 className="font-bold text-xl">Começar</h1>
            <GoArrowUpRight size={30} />
          </Link>
        </section>
      </main>
    </>
  )
}
