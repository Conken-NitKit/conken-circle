import { useContext } from "react";
import { useMutation, UseMutationResult } from "react-query";

import { GatewayContext } from "lib/context";

export interface ISignupArgument {
  email: string;
  userName: string;
  password: string;
}
export const useSignUpMutation = (): UseMutationResult<
  void,
  unknown,
  ISignupArgument,
  unknown
> => {
  const { authGateway } = useContext(GatewayContext);
  return useMutation(({ email, userName, password }: ISignupArgument) =>
    authGateway.signUp(email, userName, password)
  );
};
