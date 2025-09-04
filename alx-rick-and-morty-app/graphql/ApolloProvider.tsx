"use client";
// @ts-ignore
const ApolloProvider: any =
  require("@apollo/client/react/context/ApolloProvider").ApolloProvider;
import client from "./apolloClient";

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
