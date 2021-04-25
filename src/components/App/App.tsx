import React, { useState } from 'react';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import Steps from "../Steps/Steps";
import Navbar from "../Navbar/Navbar";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import OtherInfoForm from "../OtherInfoForm/OtherInfoForm";
import BankInfoForm from "../BankInfoForm/BankInfoForm";
import { Formik } from 'formik';

import './app.scss';
import Completed from "../Completed/Completed";

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

const initialFormValues = {
  firstName: "",
  lastName: "",
  bankName: "",
  bankAmount: "",
  description: ""
};

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));


function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  function isLastStep() {
    return activeStep === 2;
  }
  
  const onSubmit = async (values: submitInterface) => {
    if ( isLastStep() ) {
      await sleep(3000);
      setIsCompleted(true);
      console.log(values);
    } else {
      handleNext();
    }
  }
  
  return (
    <div className="App">
      <Navbar/>
      {isCompleted ? <Completed/> : ( <>
        
        <Steps
          activeStep={activeStep}
          steps={steps}
        />
        
        <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
          {({ isSubmitting, handleSubmit, values, handleChange }) => {
            return (
              <MultiStepForm
                steps={steps}
                handleBack={handleBack}
                handleNext={handleNext}
                activeStep={activeStep}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              >
                <UserInfoForm handleChange={handleChange} values={values}/>
                <BankInfoForm handleChange={handleChange} values={values}/>
                <OtherInfoForm handleChange={handleChange} values={values}/>
              </MultiStepForm>
            )
          }}
        </Formik>
      </> )}
    </div>
  );
}

export default App;
