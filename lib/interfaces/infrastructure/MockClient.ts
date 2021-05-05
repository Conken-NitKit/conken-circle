import { User } from "lib/entity";

export abstract class MockClient {
  abstract fetchMyProfile(): Promise<User>;
  abstract fetchProfile(userId: string): Promise<User>;
  abstract MySignUp(
    userId: string,
    username: string,
    password: string
  ): Promise<void>;
}
