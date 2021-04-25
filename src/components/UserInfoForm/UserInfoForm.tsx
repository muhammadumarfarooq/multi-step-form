import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Formik from 'formik';
import './user-info-form.scss';

interface UserInfoFormProps {
  values: submitInterface
  errors: Formik.FormikErrors<submitInterface>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserInfoForm = ({ values, errors, handleChange }: UserInfoFormProps) => {
  const { firstName, lastName } = values;
  return (
    <div className="user-info-form">
      <TextField
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
        value={firstName}
        onChange={handleChange}
        name="firstName"
        id="first-name"
        label="First Name"
        autoFocus
      />
      
      <TextField
        error={Boolean(errors.lastName)}
        helperText={errors.lastName}
        value={lastName}
        onChange={handleChange}
        name="lastName"
        id="last-name"
        label="Last Name"
      />
    </div>
  );
}


export default UserInfoForm;
