import React, { useState } from 'react';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import Steps from "../Steps/Steps";
import Navbar from "../Navbar/Navbar";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import OtherInfoForm from "../OtherInfoForm/OtherInfoForm";
import BankInfoForm from "../BankInfoForm/BankInfoForm";
import { Formik } from 'formik';

import './app.scss';

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
  
  const onSubmit = (values: submitInterface) => {
    console.log(values);
  };
  
  return (
    <div className="App">
      <Navbar/>
      <Steps
        activeStep={activeStep}
        steps={steps}
      />
      
      <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
        {({ handleSubmit, values, handleChange }) => {
          return (
            <MultiStepForm
              steps={steps}
              handleReset={handleReset}
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
              handleSubmit={handleSubmit}
            >
              <UserInfoForm handleChange={handleChange} values={values}/>
              <BankInfoForm handleChange={handleChange} values={values}/>
              <OtherInfoForm handleChange={handleChange} values={values}/>
            </MultiStepForm>
          )
        }}
      </Formik>
    </div>
  );
}

export default App;
