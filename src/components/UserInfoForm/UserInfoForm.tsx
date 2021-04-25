import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface UserInfoFormProps {
  values: submitInterface
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserInfoForm = ({ values, handleChange }: UserInfoFormProps) => {
  const { firstName, lastName } = values;
  return (
    <div className="user-info-form">
      <TextField value={firstName} onChange={handleChange} name="firstName" id="first-name" label="First Name"/>
      <TextField value={lastName} onChange={handleChange} name="lastName" id="last-name" label="Last Name"/>
    </div>
  );
}


export default UserInfoForm;
