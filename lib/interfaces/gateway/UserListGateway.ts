import { UserList } from "lib/entity";

export abstract class UserListGateway {
  abstract fetchUserList(): Promise<UserList>;
}
