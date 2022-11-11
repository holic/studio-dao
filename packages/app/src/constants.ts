import { chain } from "wagmi";

import { targetChainId } from "./EthereumProviders";

export const juiceboxTreasuryIds =
  targetChainId === chain.goerli.id
    ? [124]
    : [
        // TODO: mainnet
      ];

export const juiceboxProjectIds =
  targetChainId === chain.goerli.id
    ? []
    : [
        // TODO: mainnet
      ];
