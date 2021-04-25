import * as React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './completed.scss';

const Completed = () => {
  return (
    <div className="completed">
      <CheckCircleIcon style={{ fontSize: 75, color: "#28a745" }}/>
      <h1>Signup completed.</h1>
    </div>
  );
}

export default Completed;

