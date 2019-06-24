import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../constants/routes";
import {
  FormGroup,
  Label,
  Input,
  ControlFeedback,
  Button
} from "@smooth-ui/core-em";

const SignUp = () => (
  <div>
    <h1>Sign Up</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label htmlFor="form-group-input-valid">UserName</Label>
            <Input
              name="username"
              type="text"
              value={username}
              onChange={this.onChange}
              control
              valid={false}
              id="form-group-input-valid"
            />
            <ControlFeedback valid={false}>It is required</ControlFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="form-group-input-invalid">Email</Label>
            <Input
              name="email"
              type="text"
              value={email}
              onChange={this.onChange}
              control
              valid={false}
              id="form-group-input-invalid"
            />
            <ControlFeedback valid={false}>It is required.</ControlFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="form-group-input-invalid">Password</Label>
            <Input
              name="passwordOne"
              type="text"
              value={passwordOne}
              type="password"
              onChange={this.onChange}
              control
              valid={false}
              id="form-group-input-invalid"
            />
            <ControlFeedback valid={false}>It is required.</ControlFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="form-group-input-invalid">
              Password Confirmation
            </Label>
            <Input
              name="passwordTwo"
              type="password"
              value={passwordTwo}
              onChange={this.onChange}
              control
              valid={false}
              id="form-group-input-invalid"
            />
            <ControlFeedback valid={false}>It is required.</ControlFeedback>
          </FormGroup>
          <FormGroup>
            <Button disabled={isInvalid}>Sign Up</Button>
          </FormGroup>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUp;
export { SignUpForm, SignUpLink };
