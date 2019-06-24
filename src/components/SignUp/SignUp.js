import React from "react";
import {
  FormGroup,
  Label,
  Input,
  ControlFeedback,
  Button
} from "@smooth-ui/core-em";

const Signup = props => {
  return (
    <div>
      <form>
        <FormGroup>
          <Label htmlFor="form-group-input-valid">Name</Label>
          <Input control valid={false} id="form-group-input-valid" />
          <ControlFeedback valid={false}>It is required</ControlFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="form-group-input-invalid">Email</Label>
          <Input control valid={false} id="form-group-input-invalid" />
          <ControlFeedback valid={false}>It is required.</ControlFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="form-group-input-invalid">Password</Label>
          <Input control valid={false} id="form-group-input-invalid" />
          <ControlFeedback valid={false}>It is required.</ControlFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="form-group-input-invalid">
            Password Confirmation
          </Label>
          <Input control valid={false} id="form-group-input-invalid" />
          <ControlFeedback valid={false}>It is required.</ControlFeedback>
        </FormGroup>
        <FormGroup>
          <Button>Signin</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default Signup;
