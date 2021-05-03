import { AppProps } from "next/app";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { GatewayContext, InfrastructureContext } from "lib/context";
import { AuthGatewayImpl } from "lib/gateway/AuthGateway";
import { FirebaseClientImpl } from "lib/infrastructure/FirebaseClient";

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
  const [authGateway] = useState(new AuthGatewayImpl(firebaseClient));

  return (
    <InfrastructureContext.Provider value={{ firebaseClient }}>
      <GatewayContext.Provider value={{ authGateway }}>
        {children}
      </GatewayContext.Provider>
    </InfrastructureContext.Provider>
  );
};

export default MyApp;
