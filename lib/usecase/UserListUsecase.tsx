import { useContext } from "react";
import { useQuery, UseQueryResult } from "react-query";

import { GatewayContext } from "lib/context";
import { UserList } from "lib/entity";

export const useUserListQuery = (): UseQueryResult<UserList, unknown> => {
  const { userListGateway } = useContext(GatewayContext);
  return useQuery("userlist", () => userListGateway.fetchUserList());
};
