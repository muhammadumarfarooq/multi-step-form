import React, { useState } from 'react';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import Steps from "../Steps/Steps";
import Navbar from "../Navbar/Navbar";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import OtherInfoForm from "../OtherInfoForm/OtherInfoForm";
import BankInfoForm from "../BankInfoForm/BankInfoForm";
import { Formik } from 'formik';
import * as Yup from 'yup';

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

const getValidationSchema = (activeStep: number) => {
  switch (activeStep) {
    case 0:
      return Yup.object().shape({
        firstName: Yup.string()
          .min(3, "First name should be greater than 3 characters")
          .required('Fist name is required'),
        lastName: Yup.string()
          .min(3, "Last name should be greater than 3 characters")
          .required('Fist name is required'),
      })
    case 1:
      return Yup.object().shape({
        bankName: Yup.string()
          .min(3, "First name should be greater than 3 characters")
          .required('Fist name is required'),
        bankAmount: Yup.string()
          .min(3, "Last name should be greater than 3 characters")
          .required('Fist name is required'),
      })
    default:
      return;
  }
}

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
    <div className="app">
      <Navbar/>
      {isCompleted ? <Completed/> : ( <>
        
        <div className="app--step-form-wrapper">
          <Steps
            activeStep={activeStep}
            steps={steps}
          />
          <Formik
            validationSchema={getValidationSchema(activeStep)}
            initialValues={initialFormValues}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, handleSubmit, values, handleChange, errors }) => {
              console.log(errors);
              return (
                <MultiStepForm
                  steps={steps}
                  handleBack={handleBack}
                  handleNext={handleNext}
                  activeStep={activeStep}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                >
                  <UserInfoForm handleChange={handleChange} errors={errors} values={values}/>
                  <BankInfoForm handleChange={handleChange} errors={errors} values={values}/>
                  <OtherInfoForm handleChange={handleChange} values={values}/>
                </MultiStepForm>
              )
            }}
          </Formik>
        </div>
      </> )}
    </div>
  );
}

export default App;
