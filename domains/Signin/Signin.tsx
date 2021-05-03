import { NextPage } from "next";
import React from "react";

import { FIREBASE_AUTH_STATE } from "lib/interfaces/infrastructure/FirebaseClient";
import { authRedirect } from "lib/usecase/AuthUsecase";

import { SignupLink } from "./SignupLink";

export const Signin: NextPage = authRedirect(
  FIREBASE_AUTH_STATE.NOT_AUTHORIZED,
  () => {
    return (
      <div>
        <p>not login</p>
        <SignupLink />
      </div>
    );
  }
);
