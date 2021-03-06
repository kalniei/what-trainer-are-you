import {
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  TextField,
  Grid,
  Checkbox,
  Alert
} from '@mui/material';
import { useEffect, useState } from 'react';
import { TTrainerType } from '../ts/types';
import { useForm, Controller } from 'react-hook-form';
import Colors from '../helpers/Colors';
import makeStyles from '@mui/styles/makeStyles';
import axios from 'axios';

interface PageProps {
  type: TTrainerType;
}

interface IFormObj {
  name: string;
  email: string;
  trainer: string;
}

const useStyles = makeStyles({
  label: {
    color: Colors.mainBrown,
    fontWeight: 500,
    fontSize: '11px'
  }
});

const FinalForm = ({ type }: PageProps): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<IFormObj>({
    defaultValues: {
      name: '',
      email: '',
      trainer: ''
    }
  });

  const [checked, setChecked] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const classes = useStyles();

  const onSubmit = (data: IFormObj) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('trainer', data.trainer);
    formData.append('type', type);

    axios
      .post('./sendData.php', {
        data: data
      })
      .then((response) => {
        setIsSuccess(true);
        setTimeout(() => {
          document.location.href = 'https://brainupacademy.pl/';
        }, 1000);
      })
      .catch((e) => {
        setIsError(true);
        setTimeout(() => {
          document.location.href = 'https://brainupacademy.pl/';
        }, 1000);
      });
  };

  return (
    <form noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="name"
            rules={{
              required: {
                value: true,
                message: 'E-mail jest wymagany'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Imi?? i nazwisko"
                required
                fullWidth
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: 'E-mail jest wymagany'
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Niepoprawny adres e-mail.'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="E-mail"
                fullWidth
                error={!!errors?.email}
                helperText={errors?.email?.message}
                name="email"
                required={true}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            rules={{
              required: {
                value: true,
                message: 'Wybierz kt??r???? z opcij'
              }
            }}
            name="trainer"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="Chc?? by?? trenerem"
                  control={<Radio color="primary" />}
                  label="Chc?? by?? trenerem"
                />
                <FormControlLabel
                  value="Mam troche do??wiadczenia"
                  control={<Radio color="primary" />}
                  label="Mam troche do??wiadczenia"
                />
                <FormControlLabel
                  value="Zawodowo prowadz?? szkolenia"
                  control={<Radio color="primary" />}
                  label="Zawodowo prowadz?? szkolenia"
                />
              </RadioGroup>
            )}
          />
          {errors.trainer && (
            <Typography component={'span'} variant={'subtitle2'} color="error">
              {errors.trainer.message}
            </Typography>
          )}
        </Grid>

        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            }
            label="Rodo text, jaki?? fajny, z linkiem"
            classes={{ label: classes.label }}
          />
        </Grid>

        <Grid item xs={12}>
          {!isError && !isSuccess && (
            <Button variant="contained" disabled={!checked} onClick={handleSubmit(onSubmit)}>
              Wysy??am
            </Button>
          )}

          {isSuccess && <Alert severity="error">Co?? posz??o nie tak</Alert>}
          {isError && <Alert severity="success">Twoj pdf polecia?? do Ciebie!</Alert>}
        </Grid>
      </Grid>
    </form>
  );
};

export default FinalForm;
