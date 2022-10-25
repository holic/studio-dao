import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { EthereumProviders } from "../EthereumProviders";
import { Head } from "../Head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <EthereumProviders>
        <Component {...pageProps} />
      </EthereumProviders>
      <ToastContainer position="bottom-right" draggable={false} />
    </>
  );
};

export default App;
