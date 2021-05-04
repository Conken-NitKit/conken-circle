import { createContext } from "react";

import { AuthGateway } from "./interfaces/gateway/AuthGateway";
import { UserGateway } from "./interfaces/gateway/UserGateway";
import { FirebaseClient } from "./interfaces/infrastructure/FirebaseClient";
import { MockClient } from "./interfaces/infrastructure/MockClient";

interface GatewayContextValue {
  authGateway: AuthGateway;
  userGateway: UserGateway;
}

interface InfrastructureContextValue {
  firebaseClient: FirebaseClient;
  mockClient: MockClient;
}

export const InfrastructureContext = createContext<InfrastructureContextValue>(
  null
);

export const GatewayContext = createContext<GatewayContextValue>(null);
