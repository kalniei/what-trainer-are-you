import { Grid, Button, Stepper, Step, StepLabel, MobileStepper } from '@mui/material';
import { useEffect, useState } from 'react';
import quizOptions from '../helpers/QuizOptions';
import { IQuiz, IQuizOptions } from '../ts/interfaces';
import SingleRadioGroup from './SingleRadioGroup';

interface PageProps {
  finishTest: (result: number) => void;
}
const QuizSteps = ({ finishTest }: PageProps): JSX.Element => {
  const [steps, setSteps] = useState<IQuiz[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const isNextActive = (): boolean => {
    const stepOptions = steps[activeStep]?.options;
    return stepOptions?.some((x) => x.selected);
  };

  const countResult = () => {
    const valArr: number[] = [];
    steps.forEach((x: IQuiz) => {
      x?.options.forEach((y: IQuizOptions) => {
        if (y.selected) {
          valArr.push(y.optionValue);
        }
      });
    });
    return valArr.reduce((partial_sum, a) => partial_sum + a, 0);
  };

  const handleNext = (): void => {
    if (activeStep === steps.length - 1) {
      finishTest(countResult());
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const shufflOptions = (arr: IQuizOptions[]) => {
    return arr
      ?.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const recieveChosenOption = (chosenId: string) => {
    const stepOptions = steps[activeStep]?.options;
    const newStepOptions = stepOptions?.map((x) => {
      return {
        ...x,
        selected: x.id === chosenId ? true : false
      };
    });
    let newSteps = [...steps];
    newSteps[activeStep] = {
      ...steps[activeStep],
      options: newStepOptions
    };

    setSteps(newSteps);
  };

  useEffect(() => {
    let temp = JSON.parse(JSON.stringify(quizOptions()));
    temp = temp.map((el: IQuiz) => {
      return { ...el, options: shufflOptions(el.options) };
    });
    setSteps(temp);
  }, []);

  return (
    <>
      <Stepper activeStep={activeStep} sx={{ display: { md: 'flex', xs: 'none' } }}>
        {steps.map((option: IQuiz) => (
          <Step key={option.id}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <MobileStepper
        sx={{ display: { md: 'none', xs: 'block' } }}
        variant="text"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
      />

      <Grid container>
        <Grid item xs={12} mt={4}>
          <SingleRadioGroup option={steps[activeStep]} passChosenOption={recieveChosenOption} />
        </Grid>
        <Grid item xs={12} textAlign="right" mt={4}>
          <Button disabled={!isNextActive()} onClick={handleNext} variant="contained">
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default QuizSteps;
