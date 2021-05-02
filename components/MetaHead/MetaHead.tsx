import Head from "next/head";
import React from "react";

export interface MetaData {
  title: string;
  description: string;
  image?: string;
  url: string;
}

interface Props {
  meta: MetaData;
}
export const MetaHead: React.FC<Props> = ({ meta }) => {
  const { title, description, image, url } = meta;
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="Emotty" />
    </Head>
  );
};
