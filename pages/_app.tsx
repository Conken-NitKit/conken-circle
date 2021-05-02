import { AppProps } from "next/app";
import React, { useState } from "react";

import { GatewayContext, InfrastructureContext } from "lib/context";
import { AuthGatewayImpl } from "lib/gateway/AuthGateway";
import { FirebaseClientImpl } from "lib/infrastructure/FirebaseClient";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DIProvider>
      <Component {...pageProps} />
    </DIProvider>
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
