import * as React from 'react';
import './multi-step-form.scss';
import StepActionButtons from "../StepActionButtons/StepActionButtons";

interface MultiStepFormProps {
  activeStep: number
  children: React.ReactNode
  steps: string[]
  isSubmitting: boolean
  handleBack: () => void
  handleNext: () => void
  handleSubmit: () => void
}

const MultiStepForm = ({ activeStep, children, steps, handleBack, handleSubmit, isSubmitting }: MultiStepFormProps) => {
  const childrenArray = React.Children.toArray(children)
  const currentChild = childrenArray[ activeStep ];
  
  return (
    <form onSubmit={handleSubmit} className="multi-stepform">
      {currentChild}
      <StepActionButtons
        isSubmitting={isSubmitting}
        handleBack={handleBack}
        steps={steps}
        activeStep={activeStep}
      />
    </form>
  );
}

export default MultiStepForm
