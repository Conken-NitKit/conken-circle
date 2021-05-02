import { GetServerSideProps, NextPage } from "next";
import React from "react";

import { MetaData, MetaHead } from "components/MetaHead";

export interface serverSideProps {
  meta?: MetaData;
}

export const Home: NextPage<serverSideProps> = ({ meta }) => {
  return (
    <React.Fragment>
      {meta && <MetaHead meta={meta} />}
      <div>Hello World!!</div>
    </React.Fragment>
  );
};

export default Home;
