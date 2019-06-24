/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const signedIn = false;

const Landing = () => (
  <div
    css={{
      backgroundColor: "pink",
      width: "100%",
      height: "100vh"
    }}
  >
    <h1>Landing</h1>
    {signedIn === true ? <SignIn /> : <SignUp />}
  </div>
);

export default Landing;
