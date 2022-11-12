import { chain } from "wagmi";

import { targetChainId } from "./EthereumProviders";

export const juiceboxTreasuryIds =
  targetChainId === chain.goerli.id ? [124] : [331];

export const juiceboxProjectIds =
  targetChainId === chain.goerli.id
    ? [124, 128, 129, 130]
    : [
        // TODO: mainnet
      ];
