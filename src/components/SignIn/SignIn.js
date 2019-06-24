import React from "react";
import {
  FormGroup,
  Label,
  Input,
  ControlFeedback,
  Button
} from "@smooth-ui/core-em";

const SignIn = props => {
  return (
    <div>
      <h2>Sign in</h2>
      <FormGroup>
        <Label htmlFor="form-group-input-name">Email</Label>
        <Input control valid={false} id="form-group-input-email" />
        <ControlFeedback valid={false}>Required</ControlFeedback>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="form-group-input-invalid">Password</Label>
        <Input control valid={false} id="form-group-input-password" />
        <ControlFeedback valid={false}>It is required.</ControlFeedback>
        <Button variant="dark">Sign In</Button>
      </FormGroup>
    </div>
  );
};

export default SignIn;
