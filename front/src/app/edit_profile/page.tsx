import { EditMyProfile } from "@/components/EditMyProfile"
import { VerifyLogged } from "@/components/VerifyLogged"

export default async function EditProfile() {
  const myUser = VerifyLogged()
  return (
    <>
      <main className="body">
      <section className="section flex justify-center items-center">
          <EditMyProfile token={myUser.token} idUser={myUser.id} />
        </section>
      </main>
    </>
  )
}
