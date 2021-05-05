import { AppProps } from "next/app";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { GatewayContext, InfrastructureContext } from "lib/context";
import { AuthGatewayImpl } from "lib/gateway/AuthGateway";
import { UserGatewayImpl } from "lib/gateway/UserGateway";
import { UserListGatewayImpl } from "lib/gateway/UserListGateway";
import { FirebaseClientImpl } from "lib/infrastructure/FirebaseClient";
import { MockClientImpl } from "lib/infrastructure/MockClient";
import { UserListClientImpl } from "lib/infrastructure/UserLisrClient";

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
  const [userListClient] = useState(new UserListClientImpl());
  const [authGateway] = useState(
    new AuthGatewayImpl(firebaseClient, mockClient)
  );
  const [userGateway] = useState(new UserGatewayImpl(mockClient));
  const [userListGateway] = useState(new UserListGatewayImpl(userListClient));

  return (
    <InfrastructureContext.Provider
      value={{ firebaseClient, mockClient, userListClient }}
    >
      <GatewayContext.Provider
        value={{ authGateway, userGateway, userListGateway }}
      >
        {children}
      </GatewayContext.Provider>
    </InfrastructureContext.Provider>
  );
};

export default MyApp;
