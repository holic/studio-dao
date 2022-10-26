import { chain } from "wagmi";

import { targetChainId } from "./EthereumProviders";

export const juiceboxProjectIds =
  targetChainId === chain.goerli.id
    ? [38, 47, 59, 61]
    : [
        // TODO: mainnet
      ];
