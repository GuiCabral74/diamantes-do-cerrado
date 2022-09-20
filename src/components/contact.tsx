import type { NextPage } from "next"

const Contact: NextPage = () => {
  return (
    <section id="contact" className="border rounded p-3 m-5">

      <div className="container col-12">
        <div className="contact col-3 m-auto pt-5">
          <h2 className="title">Entre em contato!</h2>
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

        <div className="contact_whats col-3 m-auto pt-5">
          <p>Caso queira um atedimento mais rapido fale agora pelo Whatsapp!</p>
          <a target="_blank" href="#" ><button className="btn btn-success">WHATSAPP</button></a>
        </div>

      </div>

    </section>
  )
}

export default Contact