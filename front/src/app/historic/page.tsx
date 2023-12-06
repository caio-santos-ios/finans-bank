import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import photoAnimation from "@/assets/animation.png";
import { HeaderHistoric } from "@/components/HeaderHistoric";

export default async function Historic() {

  return (
    <>
      <main className="body">
        <main className="body">
        <section className="section flex justify-center">
            <Historic idUser={myUser.id} listHistoric={myHistoric} />
        </section>
      </main>
      </main>
    </>
  )
}
