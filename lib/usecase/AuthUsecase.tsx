import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";

import { GatewayContext } from "lib/context";
import {
  FirebaseAuthState,
  FIREBASE_AUTH_STATE,
} from "lib/interfaces/infrastructure/FirebaseClient";

export const useMySignUpMutate = (): UseMutationResult<
  string,
  unknown,
  { email: string; username: string; password: string },
  unknown
> => {
  const { authGateway } = useContext(GatewayContext);
  return useMutation(
    async ({
      email,
      username,
      password,
    }: {
      email: string;
      username: string;
      password: string;
    }) => {
      await authGateway.signUp(email, username, password);
      return email;
    },
    {
      onSuccess: (ACEmail: string) => {
        console.log(`login AC!! (${ACEmail})`);
      },
    }
  );
};

export const useAuthState = (): FirebaseAuthState => {
  const { authGateway } = useContext(GatewayContext);
  const [state, setState] = useState<FirebaseAuthState>(
    authGateway.getAuthState()
  );

  useEffect(
    () => authGateway.onAuthStateChanged((newState) => setState(newState)),
    [authGateway]
  );

  return state;
};

export const authRedirect = <P extends unknown>(
  allowedStatus: FirebaseAuthState,
  PageComponent: NextPage<P>
): NextPage<P> => {
  const redirectTo =
    allowedStatus === FIREBASE_AUTH_STATE.AUTHORIZED ? "/signin" : "/";

  // eslint-disable-next-line react/display-name
  return (props: P) => {
    const authState = useAuthState();
    const router = useRouter();

    useEffect(() => {
      if (authState === FIREBASE_AUTH_STATE.PENDING) return;
      if (authState !== allowedStatus) router.push(redirectTo);
    }, [authState, router]);

    return authState !== allowedStatus ? <div /> : <PageComponent {...props} />;
  };
};

export const useAuthStateQuery = (): UseQueryResult<
  FirebaseAuthState,
  unknown
> => {
  const { authGateway } = useContext(GatewayContext);
  return useQuery("authState", () => authGateway.getAuthState());
};
