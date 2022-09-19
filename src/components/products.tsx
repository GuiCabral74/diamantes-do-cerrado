import { NextPage } from "next"
import { My_container } from "./styles/styles";


import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from "next/image";
import foto from '../assets/kit-nutricional.png';
import foto1 from '../assets/carousel-1.png';
import foto2 from '../assets/carousel-2.png';
import foto3 from '../assets/carousel-3.png';

const Products: NextPage = () => {
  return (
    // <My_container>
    //   <div>
    //     <h1>PRODUTOS OMnilife</h1>
    //     <p>Adquira Produtos para Uso pessoal ou Cadastre-se para revenda!</p>
    //   </div>
    //   <div> imagens</div>
    // </My_container>

    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }} className="my-auto text-center">
          <Typography component="h2" variant="h5" >
            PRODUTOS OMnilife
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Adquira Produtos para Uso pessoal ou Cadastre-se para revenda!
          </Typography>
          <a target="_blank" href="#" > <button className="btn btn-success">WhatsApp</button></a>
        </CardContent>

        {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={foto1} className="d-block img-thumbnail w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={foto2} className="d-block img-thumbnail w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={foto3} className="d-block img-thumbnail w-100" alt="..." />
            </div>
          </div>
        </div> */}

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={foto1} className="d-block img-thumbnail w-100" alt="foto1" />
            </div>
            <div className="carousel-item">
              <Image src={foto2} className="d-block img-thumbnail w-100" alt="foto2" />
            </div>
            <div className="carousel-item">
              <Image src={foto3} className="d-block img-thumbnail w-100" alt="foto3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </Card>

    </Grid>
  )
}


export default Products;