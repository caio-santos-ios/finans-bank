import { Form } from "@/components/Form";

export default function Login() {

  return (
    <main className="body">
      <section className="section_login"> 
        <Form login={true}/>
      </section>
    </main>
  )
}
