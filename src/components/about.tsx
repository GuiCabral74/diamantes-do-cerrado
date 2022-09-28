import { NextPage } from "next";
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import aboutBonus from './js/aboutBonus';


const About: NextPage = () => {
  return (
    <Grid id='about'>
      <Typography align="center" component="h2"
        variant="h5" style={{ padding: '20px' }}>A empresa que mais cresce no Segmento de Saúde e Beleza!</Typography>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        3 Formar de Bônus e Comissões!
      </Typography>
      <Grid container>
        {aboutBonus.map((item: any, index: number) => (
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
              <Typography pb={2} variant="subtitle1" component="h5" textAlign={"center"} >
                {item.subTitle}
              </Typography>
              <Typography style={{ fontSize: '1.0rem' }}>
                {item.text}
              </Typography>
            </CardContent>

          </Grid>
        ))}


      </Grid>
    </Grid>
  )
}

export default About;