import React from "react";

import { Normalize } from "@smooth-ui/core-em";
import { Button } from "@smooth-ui/core-em";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";

const signedIn = false;

const App = () => (
  <div>
    <>
      <Normalize />
    </>
    <h1>Gigbud</h1>
    <Button variant="dark">Sign out</Button>
    {signedIn === true ? <Home /> : <Landing />}
  </div>
);

export default App;
