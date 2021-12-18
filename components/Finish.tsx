import {
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress
} from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TTrainerType } from '../ts/types';
import FinalForm from './FinalForm';
import Colors from '../helpers/Colors';

interface PageProps {
  result: number;
}
const Finish = ({ result }: PageProps): JSX.Element => {
  const [type, setType] = useState<TTrainerType | null>(null);
  const setTrainerType = (result: number) => {
    switch (true) {
      case result <= 4:
        setType('lew');
        break;
      case result <= 10:
        setType('lwica');
        break;
      case result > 10:
        setType('tygrys');
        break;
      default:
        setType(null);
        break;
    }
  };

  useEffect(() => {
    setTrainerType(result);
  }, [result]);

  return (
    <Grid container>
      <Grid item xs={12} mt={4}>
        {!type && (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        )}
        {type && (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} textAlign="center">
              <Typography variant="h4">Twój typ trenera to: </Typography>
              <Typography variant="h2" fontWeight={800}>
                {type}
              </Typography>
              <Typography variant="subtitle1">
                Chcesz dowiedzieć się więcej? Wyślimy Ci to!{' '}
              </Typography>

              <Image src={`/${type}.jpeg`} alt={type} width={300} height={300} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Wyślij formularz by dostac darmowego psdka </Typography>
              <FinalForm type={type} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Finish;
