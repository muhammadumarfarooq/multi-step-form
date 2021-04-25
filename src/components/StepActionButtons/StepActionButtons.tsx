import * as React from 'react';
import Button from "@material-ui/core/Button";
import { CircularProgress } from '@material-ui/core';
import './step-action-buttons.scss';

import { makeStyles } from "@material-ui/core/styles";

interface StepActionButtonsProps {
  activeStep: number
  steps: string[]
  isSubmitting: boolean
  handleBack: () => void
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

const StepActionButtons = ({ activeStep, steps, handleBack, isSubmitting }: StepActionButtonsProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className="step-action-buttons">
      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
        startIcon={isSubmitting ? <CircularProgress style={{ color: "#fff" }} size="1rem"/> : null}
      >
        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
}

export default StepActionButtons;
