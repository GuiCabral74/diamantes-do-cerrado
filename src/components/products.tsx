import { NextPage } from "next"
import React from 'react';
import Image from "next/image";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import productsimgs from './js/productsImgs'
import Carousel from 'react-bootstrap/Carousel';
import categoryProducts from "./js/categoryProducts";


const Products: NextPage = () => {
  return (
    <>
      <Grid container spacing={2} columns={16} alignItems="center" id='products' style={{ background: 'none', padding: '0 20px' }}>
        <Grid item xs={8} id='find' >
          <Grid id='here' container direction="column" justifyContent="center" alignItems="center" >
            <Typography component="h2" variant="h5" >
              PRODUTOS Omnilife
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Adquira Produtos para Uso pessoal ou Cadastre-se para revenda!
            </Typography>
            <a target="_blank" href="https://wa.me/5561991998882" rel="noreferrer" > <button className="btn btn-success">WhatsApp</button></a>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Carousel >
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
        </Grid>
      </Grid>

      <Grid container direction="column" justifyContent="center" alignItems="center" id="products_second">
        <Grid>
          <Typography align="center" style={{ padding: '20px 0 0' }}>Categorias</Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Produtos Omnilife
          </Typography>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 16 }} style={{ padding: '0 20px', textAlign: 'center', }}>
          {categoryProducts.map((item: any, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index} >
              <Card style={{ maxWidth: '250px', height: '410px', minHeight: '370px', maxHeight: '490px', padding: '10px' }}>
                <Image
                  src={item.image}
                  alt={item.alt}
                />

                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2" textAlign={"center"} >
                    {item.name}
                  </Typography>
                  <Typography style={{ fontSize: '1.0rem' }}>
                    {item.products}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" alignItems="center" style={{ padding: '40px 0', textAlign: 'center', }}>
          <Grid item xs={2} sm={4} md={6}>
            <h1>Faça sua encomenda!</h1>
            <p>Consulte valores e saiba como Adquirir os produtos de nutrição Omnilife</p>
            <p>Ao clicar no botão você será direcionado ao atendimento personalizado pelo Whatspp</p>
            <a target="_blank" href="https://wa.me/5561991998882" rel="noreferrer" > <button className="btn btn-primary" style={{ padding: '20px 30px' }}>Comprar Produtos</button></a>

          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default Products;