import type { NextPage } from "next"
import { Contact_form, Contact_whats } from "./styles/styles"

const Contact: NextPage = () => {
  return (
    <section id="contact" className="border rounded p-3 m-5">

      <Contact_form className="container col-12">
        <div className="col-5 m-auto pt-5 text-center">
          <h2 className="display-4">Entre em contato!</h2>
          <p>Deixe aqui sua mensagem e em breve retornaremos contato <br />Fique atento ao seu e-mail ou Whatsapp!</p>
        </div>
        <form className="col-9 m-auto py-5">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control border border-2 border-dark" id="name" placeholder="Seu Nome" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control border border-2 border-dark" id="email" placeholder="Seu E-mail" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Telefone</label>
            <input type="text" className="form-control border border-2 border-dark" id="phone" placeholder="(DDD) 00000-0000" />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Deixe aqui sua mensagem</label>
            <textarea className="form-control border-2 border-2 border-dark" id="text" placeholder="Mensagem"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
        </form>

        <Contact_whats className="col-5 m-auto pt-5 text-center">
          <p className="lead">Caso queira um atedimento mais rapido fale agora pelo Whatsapp!</p>
          <a target="_blank" href="https://wa.me/5561991998882" rel="noreferrer" > <button className="btn btn-success">WhatsApp</button></a>
        </Contact_whats>

      </Contact_form>

    </section>
  )
}

export default Contact