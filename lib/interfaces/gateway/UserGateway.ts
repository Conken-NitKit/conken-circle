import { User } from "lib/entity";

export abstract class UserGateway {
  abstract fetchMyProfile(): Promise<User>;
  abstract fetchProfile(userId: string): Promise<User>;
}
