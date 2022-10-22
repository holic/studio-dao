import { chain, useContractReads } from "wagmi";

import JBTiered721DelegateStore from "../../abis/JBTiered721DelegateStore.json";
import {
  JBTiered721DelegateStoreAddressGoerli,
  MAX_NFT_REWARD_TIERS,
} from "../../constants/juicebox";
import { NFTRewardTier, useNftRewardTokens } from "./useNftRewardTokens";

/**
 * Return a list of tiers for all NFT reward tokens.
 */
export function useNftRewardTiers(): {
  data: NFTRewardTier[] | undefined;
  isLoading: boolean;
} {
  const { data: nftRewardTokens, isLoading: nftRewardsLoading } =
    useNftRewardTokens();

  // Get tiers
  const tiersRead =
    nftRewardTokens?.map((nft) => {
      return {
        contractInterface: JBTiered721DelegateStore.abi,
        chainId: chain.goerli.id,
        addressOrName: JBTiered721DelegateStoreAddressGoerli,
        functionName: "tiers",
        args: [nft.address, 0, MAX_NFT_REWARD_TIERS],
      };
    }) ?? [];

  const { data: tiers, isLoading: tiersLoading } = useContractReads({
    contracts: tiersRead,
  });

  const allTiers = tiers?.flatMap((tierCollection, idx) => {
    return tierCollection?.map((tier: NFTRewardTier) => {
      return {
        ...tier,
        token: nftRewardTokens?.[idx],
      } as NFTRewardTier;
    });
  });

  return { data: allTiers, isLoading: tiersLoading || nftRewardsLoading };
}
