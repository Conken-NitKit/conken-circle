import { NextPage } from "next";
import React from "react";

import { MetaData, MetaHead } from "components/MetaHead";
import { useAuthStateQuery } from "lib/usecase/AuthUsecase";

export interface serverSideProps {
  meta?: MetaData;
}

export const Home: NextPage<serverSideProps> = ({ meta }) => {
  const { data } = useAuthStateQuery();
  return (
    <React.Fragment>
      {meta && <MetaHead meta={meta} />}
      <div>{JSON.stringify([data])}</div>
    </React.Fragment>
  );
};

export default Home;
