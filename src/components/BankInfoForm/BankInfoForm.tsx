import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Formik from "formik";


interface BankInfoFormProps {
  values: submitInterface
  errors: Formik.FormikErrors<submitInterface>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BankInfoForm = ({ values, errors, handleChange }: BankInfoFormProps) => {
  const { bankName, bankAmount } = values;
  return (
    <div className="user-info-form">
      <TextField
        error={Boolean(errors.bankName)}
        helperText={errors.bankName}
        value={bankName}
        onChange={handleChange}
        name="bankName"
        id="bank-name"
        label="Bank Name"
      />
      <TextField
        error={Boolean(errors.bankAmount)}
        helperText={errors.bankAmount}
        value={bankAmount}
        onChange={handleChange}
        name="bankAmount"
        id="bank-amount"
        label="Bank Amount"/>
    </div>
  );
}


export default BankInfoForm;
