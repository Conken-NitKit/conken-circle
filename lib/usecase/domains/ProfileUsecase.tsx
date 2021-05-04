import { useContext } from "react";
import { useQuery, UseQueryResult } from "react-query";

import { GatewayContext } from "lib/context";
import { User } from "lib/entity";

export const useSignUpMutation = (): UseQueryResult<User, unknown> => {
  const { userGateway } = useContext(GatewayContext);
  return useQuery("myProfile", () => userGateway.fetchMyProfile());
};
