import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

interface StepActionButtonsProps {
  activeStep: number
  steps: string[]
  handleReset: () => void
  handleBack: () => void
  handleNext: () => void
}

const useStyles = makeStyles((theme) => ( {
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
} ));

const StepActionButtons = ({ activeStep, steps, handleReset, handleBack, handleNext }: StepActionButtonsProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>
            All steps completed - you&apos;re finished
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </div>
      ) : (
        <div>
          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepActionButtons;
