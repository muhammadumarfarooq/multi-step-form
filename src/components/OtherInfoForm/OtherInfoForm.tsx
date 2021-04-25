import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface OtherInfoFormProps {
  values: submitInterface
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const OtherInfoForm = ({ values, handleChange }: OtherInfoFormProps) => {
  const { description } = values;
  return (
    <div className="user-info-form">
      <TextField
        value={description}
        onChange={handleChange}
        name="description"
        id="description"
        label="Description (Optional)"/>
    </div>
  );
}


export default OtherInfoForm;
