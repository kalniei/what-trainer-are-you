import { Card, CardContent, Grid, Button, Typography, Divider, Stepper } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Finish from './Finish';
import Header from './Header';
import QuizSteps from './QuizSteps';

const Quiz = (): JSX.Element => {
  const [result, setResult] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const finishTest = (result: number) => {
    setFinished(true);
    setResult(result);
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
        <Header />
        <Grid item xs={12}>
          <Card>
            <CardContent>
              {!finished && <QuizSteps finishTest={finishTest} />}
              {finished && <Finish result={result} />}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quiz;
