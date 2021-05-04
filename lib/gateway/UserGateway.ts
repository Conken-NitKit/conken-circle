import { User } from "lib/entity";
import { UserGateway } from "lib/interfaces/gateway/UserGateway";
import { MockClient } from "lib/interfaces/infrastructure/MockClient";

export class UserGatewayImpl extends UserGateway {
  constructor(private mockClient: MockClient) {
    super();
  }

  async fetchMyProfile(): Promise<User> {
    return this.mockClient.fetchMyProfile();
  }
}
