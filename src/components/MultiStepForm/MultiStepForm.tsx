import * as React from 'react';

interface MultiStepFormProps {
  activeStep: number
  children: React.ReactNode
}

const MultiStepForm = ({ activeStep, children }: MultiStepFormProps) => {
  const childrenArray = React.Children.toArray(children)
  const currentChild = childrenArray[ activeStep ];
  return (
    <div className="multi-stepform">
      {currentChild}
    </div>
  );
}

export default MultiStepForm
