import { NextPage } from "next";
import React from "react";

import { FIREBASE_AUTH_STATE } from "lib/interfaces/infrastructure/FirebaseClient";
import { authRedirect } from "lib/usecase/AuthUsecase";

export const Home: NextPage = authRedirect(
  FIREBASE_AUTH_STATE.AUTHORIZED,
  () => {
    return <div>login</div>;
  }
);
