/**@jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/core";
import { Normalize } from "@smooth-ui/core-em";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const listItem = css`
  padding: 10px;
`;

const listLink = css`
  textdecoration: none;
  color: black;
`;

const Navigation = () => (
  <div>
    <>
      <Normalize />
    </>
    <nav
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "hotpink",
        alignItems: "baseline"
      }}
    >
      {" "}
      <h1>Gigbud</h1>
      <div>
        <ul
          css={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline"
          }}
        >
          <li css={listItem}>
            <Link css={listLink} to={ROUTES.SIGN_IN}>
              Sign In
            </Link>
          </li>
          <li css={listItem}>
            <Link css={listLink} to={ROUTES.LANDING}>
              Landing
            </Link>
          </li>
          <li css={listItem}>
            <Link css={listLink} to={ROUTES.HOME}>
              Home
            </Link>
          </li>
          <li css={listItem}>
            <Link css={listLink} to={ROUTES.ACCOUNT}>
              Account
            </Link>
          </li>
          <li css={listItem}>
            <Link css={listLink} to={ROUTES.ADMIN}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
