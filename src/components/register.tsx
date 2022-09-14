import { NextPage } from "next";
import Image from "next/image";
import { Register_Container, List, Btn, Title } from "./styles/styles"
import kitNutricional from "../assets/kit-nutricional.png";
import kitSeytu from "../assets/kit-seytu.png";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Register: NextPage = () => {
  return (
    <>
      <Register_Container className="container col-12 py-5">
        <div className="col-10 mx-auto">
          <div>
            <Title className="py-5">Vantagens de Cadastrar</Title>
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
          </div>
          <div className=" col-12">
            <h2 className="py-5">Escolha o seu KIT INICIAL</h2>
            <section
              id="section_kits"
              className="row row-cols-1 row-cols-md-2 g-4 pb-5"
            >
              <Card id="card_kit" className="col">
                <Card className=" border rounded-4 h-100 p-5">
                  <Image
                    src={kitSeytu}
                    alt="kit seytu omnilife"

                  />
                  <CardContent>
                    <div className="card-body p-3">
                      <Typography gutterBottom variant="h5" component="div">
                        KIT SEYTU - R$254
                      </Typography >
                      <Typography variant="body2" color="text.secondary">
                        <ul>
                          <li>Espuma de limpeza facial</li>
                          <li>Creme de mãos</li>
                          <li>Batom Cremoso</li>
                          <li>PIN</li>
                          <li>Revista</li>
                          <li>Catálogo</li>
                          <li>Bolsa Executiva</li>
                        </ul>
                      </Typography>
                      <CardActions>
                        <Button
                          className="btn btn-primary btn-lg border rounded-5"
                          type="button"
                        >
                          Cadastrar
                        </Button>
                      </CardActions>
                    </div>
                  </CardContent>
                </Card>
              </Card>


              <Card id="card_kit" className="col">
                <Card className=" border rounded-4 h-100 p-5">
                  <Image
                    src={kitNutricional}
                    alt="kit nutricional omnilife"
                  />
                  <CardContent>

                    <div className="card-body p-3">
                      <Typography gutterBottom variant="h5" component="div">
                        KIT NUTRICIONAL - R$254
                      </Typography>
                      <Typography variant="body2" color="text.secondary">

                        <ul>
                          <li>Magnus caixa 30 sachês</li>
                          <li>Coqueteleira</li>
                          <li>PIN</li>
                          <li>Catálogo</li>
                          <li>Revista</li>
                          <li>Mochila Executiva</li>
                          <li>Calendario</li>
                        </ul>
                      </Typography>
                      <CardActions>

                        <Button
                          className="btn btn-primary btn-lg border rounded-5"
                          type="button"
                        >
                          Cadastrar
                        </Button>

                      </CardActions>

                    </div>
                  </CardContent>
                </Card>
              </Card>
            </section>
          </div>
        </div>
      </Register_Container>
    </>
  )
}

export default Register;
