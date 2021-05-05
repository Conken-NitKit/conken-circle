import { UserList } from "lib/entity";
import { UserListClient } from "lib/interfaces/infrastructure/UserListClient";

export class UserListClientImpl extends UserListClient {
  async fetchUserList(): Promise<UserList> {
    return new Promise((resolve) => {
      resolve({
        id: "mock-mock",
        ownerId: "mock-mock",
        menberIds: ["mock-mock1", "mock-mock2", "mock-mock3"],
      });
    });
  }
}
