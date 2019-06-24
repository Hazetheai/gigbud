import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Normalize } from "@smooth-ui/core-em";
import { Button } from "@smooth-ui/core-em";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import PasswordForgetPage from "../PasswordForget/PasswordForget";
import AccountPage from "../Account/Account";
import AdminPage from "../Admin/Admin";

import * as ROUTES from "../constants/routes";

const signedIn = false;

const App = () => (
  <Router>
    <div>
      <>
        <Normalize />
      </>
      <Navigation />
      <Link>Sign out</Link>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
