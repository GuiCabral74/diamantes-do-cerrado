import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { List } from './styles/styles';
import Image from "next/image";

import kits from './kits.js'



const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
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
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {kits.map((item: any, index: number) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>
                      <ul>
                        <li>{item.description}</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button>Cadastrar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}