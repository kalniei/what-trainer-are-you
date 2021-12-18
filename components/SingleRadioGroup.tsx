import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IQuiz } from '../ts/interfaces';

interface PageProps {
  option: IQuiz;
  passChosenOption: (x: string) => void;
}

const SingleRadioGroup = ({ option, passChosenOption }: PageProps): JSX.Element => {
  const [chosenOption, setChosenOption] = useState<string>('');

  useEffect(() => {
    if (!chosenOption) return;
    passChosenOption(chosenOption);
  }, [chosenOption]);

  return (
    <FormControl component="fieldset">
      <Typography variant="h4">{option?.label}</Typography>
      <RadioGroup
        name="radio-buttons-group"
        value={chosenOption}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setChosenOption(event.target.value)
        }
      >
        {option?.options.map((x) => (
          <FormControlLabel
            sx={{ mb: 2 }}
            key={x.id}
            value={x.id}
            control={<Radio />}
            label={x.optionLabel}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SingleRadioGroup;
