import React, { usestate, useContext } from "react";
import Alert from "react-bootstrap/Alert";

function AlertComponent(){
return(
<div>
    {
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
))
    }
</div>
);
}
export default AlertComponent;