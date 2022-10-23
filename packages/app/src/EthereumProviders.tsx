import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { allChains, chain, createClient, WagmiConfig } from "wagmi";

export const targetChainId =
  parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || "") || chain.goerli.id;

const targetChains = allChains.filter((chain) => chain.id === targetChainId);
// add mainnet after target chain so we don't force a network switch after connecting
// and so that ENS can resolve via mainnet
targetChains.push(chain.mainnet);

export const wagmiClient = createClient(
  getDefaultClient({
    appName: "StudioDAO",
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    chains: targetChains,
  })
);

export const EthereumProviders: React.FC = ({ children }) => (
  <WagmiConfig client={wagmiClient}>
    <ConnectKitProvider theme="midnight">{children}</ConnectKitProvider>
  </WagmiConfig>
);
