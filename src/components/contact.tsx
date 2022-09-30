import { Button, Grid, TextField, Typography } from "@mui/material"
import type { NextPage } from "next"
import { Contact_form, Contact_whats } from "./styles/styles"
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon  from '@mui/icons-material/WhatsApp';

const Contact: NextPage = () => {
  return (
    <Grid container id="contact" className="border rounded p-3 m-5">
      <Grid item >
        <Contact_form >
          <div  className="col-5 m-auto pt-5 text-center">
            <Typography variant="h3">Entre em contato!</Typography>
            <Typography variant="body1">Deixe aqui sua mensagem e em breve retornaremos contato <br />Fique atento ao seu e-mail ou Whatsapp!</Typography>
          </div>
          <Grid item >
            <TextField
              required
              id="outlined-name"
              margin="normal"
              fullWidth
              label="Name"
            // value={name}
            // onChange={handleChange}
            />
            <TextField
              required
              id="outlined-email"
              margin="normal"
              fullWidth
              label="E-mail"
              placeholder="Seu E-mail"
            />
            <TextField
              required
              id="outlined-email"
              margin="normal"
              fullWidth
              label="Telefone"
              placeholder="(DDD) 00000-0000"
            />
            <TextField
              id="outlined-multiline-static"
              margin="normal"
              label="Deixe aqui sua mensagem"
              fullWidth
              multiline
              rows={4}
            />
            
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>Enviar Mensagem</Button>
          </Grid>

          <Contact_whats className="col-5 m-auto pt-5 text-center">
            <p className="lead">Caso queira um atedimento mais rapido fale agora pelo Whatsapp!</p>
            <a target="_blank" href="https://wa.me/5561991998882" rel="noreferrer" > <Button variant="contained"  endIcon={<WhatsAppIcon />}>WhatsApp</Button></a>
          </Contact_whats>

        </Contact_form>
      </Grid>
    </Grid>
  )
}

export default Contact