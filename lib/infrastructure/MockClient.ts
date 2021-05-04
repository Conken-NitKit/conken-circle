import { User } from "lib/entity";
import { MockClient } from "lib/interfaces/infrastructure/MockClient";

export class MockClientImpl extends MockClient {
  async fetchMyProfile(): Promise<User> {
    return new Promise((resolve) => {
      resolve({
        id: "mock-mock",
        mail: "kosen@gmail.com",
        name: "高専太郎",
        biography: "",
        iconImage: null,
        follows: [],
        followers: [],
        userListIds: [],
        bookMarks: [],
      });
    });
  }
}
