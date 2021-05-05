import { UserList } from "lib/entity";
import { UserListGateway } from "lib/interfaces/gateway/UserListGateway";
import { UserListClient } from "lib/interfaces/infrastructure/UserListClient";

export class UserListGatewayImpl extends UserListGateway {
  constructor(private userListClient: UserListClient) {
    super();
  }

  async fetchUserList(): Promise<UserList> {
    return this.userListClient.fetchUserList();
  }
}
