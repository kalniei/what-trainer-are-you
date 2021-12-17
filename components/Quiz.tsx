import { Card, CardContent, Grid, Button, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import quizOptions from '../helpers/quizOptions';

const Quiz = (): JSX.Element => {
  return (
    <Grid
      container
      item
      xs={11}
      md={7}
      xl={5}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', width: '100%', margin: '0 auto' }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Image src="/brainup-logo.png" alt="Brain Up" width={145} height={83} />
        </Grid>
        <Divider sx={{ width: '100%' }} />
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  Troll
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quiz;
