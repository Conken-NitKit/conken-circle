import { AppProps } from "next/app";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { GatewayContext, InfrastructureContext } from "lib/context";
import { AuthGatewayImpl } from "lib/gateway/AuthGateway";
import { UserGatewayImpl } from "lib/gateway/UserGateway";
import { FirebaseClientImpl } from "lib/infrastructure/FirebaseClient";
import { MockClientImpl } from "lib/infrastructure/MockClient";

export const queryClient = new QueryClient();

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
  const [firebaseClient] = useState(new FirebaseClientImpl());
  const [mockClient] = useState(new MockClientImpl());
  const [authGateway] = useState(new AuthGatewayImpl(firebaseClient));
  const [userGateway] = useState(new UserGatewayImpl(mockClient));

  return (
    <InfrastructureContext.Provider value={{ firebaseClient, mockClient }}>
      <GatewayContext.Provider value={{ authGateway, userGateway }}>
        {children}
      </GatewayContext.Provider>
    </InfrastructureContext.Provider>
  );
};

export default MyApp;
