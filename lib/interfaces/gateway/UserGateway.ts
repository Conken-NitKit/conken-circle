import { User } from "lib/entity";

export abstract class UserGateway {
  abstract fetchMyProfile(): Promise<User>;
}
