import { User } from "lib/entity";
import { MockClient } from "lib/interfaces/infrastructure/MockClient";

export class MockClientImpl extends MockClient {
  async fetchMyProfile(): Promise<User> {
    return new Promise((resolve) => {
      resolve({
        id: "mock-mock",
        mail: "kosen@gmail.com",
        name: "高専太郎",
        biography: "北九州高専",
        iconImage: null,
        follows: [],
        followers: [],
        SNS: {
          twitter: null,
          facebook: null,
          instgram: null,
          youtube: null,
        },
        userListIds: [],
        favoriteReviews: [],
        bookMarks: [],
      });
    });
  }

  async fetchProfile(userId: string): Promise<User> {
    const mockUsers: User[] = [
      {
        id: "mock-mock1",
        mail: "kosen@gmail.com",
        name: "高専太郎",
        biography: "北九州高専",
        iconImage: null,
        follows: [],
        followers: [],
        SNS: {
          twitter: null,
          facebook: null,
          instgram: null,
          youtube: null,
        },
        userListIds: [],
        favoriteReviews: [],
        bookMarks: [],
      },
      {
        id: "mock-mock2",
        mail: "kosen@gmail.com",
        name: "高専二郎",
        biography: "北九州高専",
        iconImage: null,
        follows: [],
        followers: [],
        SNS: {
          twitter: null,
          facebook: null,
          instgram: null,
          youtube: null,
        },
        userListIds: [],
        favoriteReviews: [],
        bookMarks: [],
      },
      {
        id: "mock-mock3",
        mail: "kosen@gmail.com",
        name: "高専三郎",
        biography: "北九州高専",
        iconImage: null,
        follows: [],
        followers: [],
        SNS: {
          twitter: null,
          facebook: null,
          instgram: null,
          youtube: null,
        },
        userListIds: [],
        favoriteReviews: [],
        bookMarks: [],
      },
    ];
    return new Promise((resolve) => {
      const responceUser: User = mockUsers.find((user) => user.id === userId);
      resolve(responceUser);
    });
  }

  async MySignIn(email: string, password: string): Promise<void> {
    return new Promise((resolve) => {
      console.log(`${email} is ${password}`);
      resolve();
    });
  }
}
