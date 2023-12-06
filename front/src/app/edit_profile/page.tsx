import { EditMyProfile } from "@/components/EditMyProfile"
import { getCookie } from "cookies-next"
import { cookies } from "next/headers"

export default async function EditProfile() {
  const user: string | undefined = getCookie('token', { cookies })
  const decodedUser = decodeURIComponent(user!)
  const myUser = JSON.parse(decodedUser)

  return (
    <>
      <main className="body">
      <section className="section">
          <EditMyProfile token={myUser.token} idUser={myUser.id} />
        </section>
      </main>
    </>
  )
}
