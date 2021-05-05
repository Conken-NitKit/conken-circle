import { UserList } from "lib/entity";

export abstract class UserListClient {
  abstract fetchUserList(): Promise<UserList>;
}
