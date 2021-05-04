import { AppProps } from "next/app";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { GatewayContext, InfrastructureContext } from "lib/context";
import { AuthGatewayImpl } from "lib/gateway/AuthGateway";
import { UserGatewayImpl } from "lib/gateway/UserGateway";
import { FirebaseClientImpl } from "lib/infrastructure/FirebaseClient";
import { MockClientImpl } from "lib/infrastructure/MockClient";
import { AuthGateway } from "lib/interfaces/gateway/AuthGateway";
import { UserGateway } from "lib/interfaces/gateway/UserGateway";
import { FirebaseClient } from "lib/interfaces/infrastructure/FirebaseClient";
import { MockClient } from "lib/interfaces/infrastructure/MockClient";

export const queryClient = new QueryClient();

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DIProvider>
        <Component {...pageProps} />
      </DIProvider>
    </QueryClientProvider>
  );
};

const DIProvider: React.FC = ({ children }) => {
  const [firebaseClient] = useState<FirebaseClient>(new FirebaseClientImpl());
  const [mockClient] = useState<MockClient>(new MockClientImpl());
  const [authGateway] = useState<AuthGateway>(
    new AuthGatewayImpl(firebaseClient)
  );
  const [userGateway] = useState<UserGateway>(new UserGatewayImpl(mockClient));

  return (
    <InfrastructureContext.Provider value={{ firebaseClient, mockClient }}>
      <GatewayContext.Provider value={{ authGateway, userGateway }}>
        {children}
      </GatewayContext.Provider>
    </InfrastructureContext.Provider>
  );
};

export default MyApp;
