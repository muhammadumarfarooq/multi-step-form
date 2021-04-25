import * as React from 'react';
import TextField from '@material-ui/core/TextField';


interface BankInfoFormProps {
  values: submitInterface
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BankInfoForm = ({ handleChange, values }: BankInfoFormProps) => {
  const { bankName, bankAmount } = values;
  return (
    <div className="user-info-form">
      <TextField value={bankName} onChange={handleChange} name="bankName" id="bank-name" label="Bank Name"/>
      <TextField value={bankAmount} onChange={handleChange} name="bankAmount" id="bank-amount" label="Bank Amount"/>
    </div>
  );
}


export default BankInfoForm;
