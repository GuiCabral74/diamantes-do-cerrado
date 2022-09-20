import { NextPage } from "next"
import React from 'react';
import Image from "next/image";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import productsimgs from './productsImgs'
import Carousel from 'react-bootstrap/Carousel';
import { CardActions, Container } from "@mui/material";
import categoryProducts from "./categoryProducts";
import { Btn } from "./styles/styles";


const Products: NextPage = () => {
  return (
    <>
      <Grid id='products' style={{ background: 'none', padding: '0 20px' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1 }} className="my-auto text-center">
            <Typography component="h2" variant="h5" >
              PRODUTOS Omnilife
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Adquira Produtos para Uso pessoal ou Cadastre-se para revenda!
            </Typography>
            <a target="_blank" href="#" > <button className="btn btn-success">WhatsApp</button></a>
          </CardContent>

          <Carousel style={{ maxWidth: "50%" }}>
            {productsimgs.map((item: any, index: number) => {
              return (
                <Carousel.Item key={index}>
                  <Image className="rounded"
                    src={item.image}
                    alt={item.alt}
                  />
                </Carousel.Item>)
            })}
          </Carousel>
        </Card>
      </Grid>

      <section id="products_second">
        <Typography align="center">Categorias</Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Produtos Omnilife
        </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>
            {categoryProducts.map((item: any, index: number) => (
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
                      <p>{item.products}</p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </section>
    </>
  )
}

export default Products;