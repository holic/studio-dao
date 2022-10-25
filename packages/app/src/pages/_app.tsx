import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { EthereumProviders } from "../EthereumProviders";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>StudioDAO</title>
        <meta
          name="description"
          content="a movie studio owned by filmmakers and fans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EthereumProviders>
        <Component {...pageProps} />
      </EthereumProviders>
      <ToastContainer position="bottom-right" draggable={false} />
    </>
  );
};

export default App;
