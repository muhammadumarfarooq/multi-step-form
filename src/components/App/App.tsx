import React, { useState } from 'react';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import './app.scss';
import Steps from "../Steps/Steps";
import StepActionButtons from "../StepActionButtons/StepActionButtons";

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className="App">
      <h1>Material UI multi-step form</h1>
      
      <Steps
        activeStep={activeStep}
        steps={steps}
      />
      
      <MultiStepForm activeStep={activeStep}>
        <h1>Multi step 1</h1>
        <h1>Multi step 2</h1>
        <h1>Multi step 3</h1>
      </MultiStepForm>
      
      <StepActionButtons
        handleReset={handleReset}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
        activeStep={activeStep}
      />
    
    </div>
  );
}

export default App;
