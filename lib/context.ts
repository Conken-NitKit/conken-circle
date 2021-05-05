import { createContext } from "react";

import { AuthGateway } from "./interfaces/gateway/AuthGateway";
import { UserGateway } from "./interfaces/gateway/UserGateway";
import { UserListGateway } from "./interfaces/gateway/UserListGateway";
import { FirebaseClient } from "./interfaces/infrastructure/FirebaseClient";
import { MockClient } from "./interfaces/infrastructure/MockClient";
import { UserListClient } from "./interfaces/infrastructure/UserListClient";

interface GatewayContextValue {
  authGateway: AuthGateway;
  userGateway: UserGateway;
  userListGateway: UserListGateway;
}

interface InfrastructureContextValue {
  firebaseClient: FirebaseClient;
  mockClient: MockClient;
  userListClient: UserListClient;
}

export const InfrastructureContext = createContext<InfrastructureContextValue>(
  null
);

export const GatewayContext = createContext<GatewayContextValue>(null);
