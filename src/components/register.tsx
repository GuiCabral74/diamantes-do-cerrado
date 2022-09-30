import { NextPage } from "next";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Btn, List, Register_Container } from './styles/styles';
import Image from "next/image";
import prod_register from '../assets/products-register.png';
import advantages from './js/advantages';

import kits from './js/kits.js'

const theme = createTheme();

const Register: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main id="register">
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Register_Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Vantagens de Cadastrar
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>

              <List className="list-group list-group-flush">
                <li className="list-group-item">
                  <div>
                    <span>Ganhe um produto de Brinde:</span>
                    <p>
                      Na sua primeira compra você receberá um produto de presente!
                      (Se somar o valor do produto do Kit + o brinde já vale mais
                      que o investimento inicial!)
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <span>Tenha Desconto já na primeira compra:</span>
                    <p>
                      Seu desconto inicial é de 20% e acumulativo. Dependendo do
                      volume da compra, já pode obter até 35% logo na primeira
                      compra!
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <span>Faça Negócio:</span>
                    <p>
                      Poderá revender os produtos e obter até 68% de lucro.
                      Através da plataforma de vendas da Omnilife, você pode ter
                      clientes em mais de 23 países!
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <span>Construa uma rede de clientes e distribuidores:</span>
                    <p>
                      Você pode convidar pessoas a fazer parte, e receber
                      comissões de até 20% do volume de compras da sua equipe!
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <span>Não há mínimo de pedido mensal:</span>
                    <p>
                      Poderá comprar qualquer quantidade de produtos. E pedidos
                      acima de 100 pontos (equivalente a 3 ou mais produtos) o
                      envio é gratis!
                    </p>
                  </div>
                </li>
              </List>


            </Typography>
          </Register_Container>
        </Box>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Escolha o seu KIT INICIAL
        </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {kits.map((item: any, index: number) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" textAlign={"center"} >
                      {item.name}
                    </Typography>
                    <Typography>
                      <ul>
                        <li>{item.description1}</li>
                        <li>{item.description2}</li>
                        <li>{item.description3}</li>
                        <li>{item.description4}</li>
                        <li>{item.description5}</li>
                        <li>{item.description6}</li>
                        {item.description7 ? <li>{item.description7}</li> : ""}
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Btn className="btn btn-primary btn-lg border m-auto p-3 rounded-5">Cadastrar</Btn>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Grid id="register_part_2" container justifyContent="center" >
          <Grid container md={12} alignItems="center" p={2} >
            <Grid xs={6}>
              <Image src={prod_register} alt="Produtos" />
            </Grid>
            <Grid xs={6} style={{ textAlign: 'center' }}>
              <h2>Gostaria de adquirir produtos Omnilife com  desconto?</h2>
              <p>Conheça as vantagens em realizar seu cadastro como Distribuidor Independente  Omnilife. Adquira produtos com desconto para uso pessoal e faça negócio!</p>
              <a target="_blank" href="https://wa.me/5561991998882" rel="noreferrer" > <button className="btn btn-success">Cadastre-se AGORA!</button></a>
            </Grid>
          </Grid>
          <Grid>
            <Typography align="center" variant="h4" pt={2}>Vantagens do Cadastro</Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Consumo inteligente com desconto
            </Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 16 }} style={{ padding: '20px', textAlign: 'center', }}>
              {advantages.map((item: any, index: number) => (
                <Grid container p={6} justifyContent="center" xs={2} sm={4} md={4} key={index}>
                  <div style={{ maxWidth: '100px', maxHeight: '290px' }}>

                    <Image
                      src={item.image}
                      alt={item.alt}
                    />
                  </div>

                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2" textAlign={"center"} >
                      {item.title}
                    </Typography>
                    <Typography style={{ fontSize: '1.0rem' }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Grid>
              ))}

            </Grid>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  )
}

export default Register;
