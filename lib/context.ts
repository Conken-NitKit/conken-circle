import { createContext } from "react";

import { AuthGateway } from "./interfaces/gateway/AuthGateway";
import { FirebaseClient } from "./interfaces/infrastructure/FirebaseClient";

interface GatewayContextValue {
  authGateway: AuthGateway;
}

interface InfrastructureContextValue {
  firebaseClient: FirebaseClient;
}

export const InfrastructureContext = createContext<InfrastructureContextValue>(
  null
);

export const GatewayContext = createContext<GatewayContextValue>(null);
