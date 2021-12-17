import Image from 'next/image';
import { Card, CardContent, Grid, Button, Typography } from '@mui/material';
import router from 'next/dist/client/router';

const Home = (): JSX.Element => {
  const goToQuiz = () => {
    router.push('/quiz');
  };

  return (
    <Grid
      container
      item
      xs={11}
      md={8}
      xl={6}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', width: '100%', margin: '0 auto' }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <Image src="/home-img.jpg" alt="Brain Up" width={500} height={375} />
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h1">Lorem Ipsum Lorem</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo commodi,
                    dolore dignissimos, error cupiditate quo blanditiis dicta laboriosam fuga in.
                    Officiis corrupti cupiditate eveniet voluptate explicabo assumenda nulla
                    pariatur.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={goToQuiz}>
                    Rozpocznij test
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
