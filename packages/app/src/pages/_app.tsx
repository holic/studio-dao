import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { EthereumProviders } from "../EthereumProviders";
import apolloClient from "../graphql/apollo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>StudioDAO</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <EthereumProviders>
          <Component {...pageProps} />
        </EthereumProviders>
      </ApolloProvider>
      <ToastContainer position="bottom-right" draggable={false} />
    </>
  );
};

export default App;
