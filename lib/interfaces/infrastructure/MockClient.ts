import { User } from "lib/entity";

export abstract class MockClient {
  abstract fetchMyProfile(): Promise<User>;
}
