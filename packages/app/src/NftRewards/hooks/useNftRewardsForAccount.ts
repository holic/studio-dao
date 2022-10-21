import JBTiered721DelegateStore from "@jbx-protocol/juice-nft-rewards/out/JBTiered721DelegateStore.sol/JBTiered721DelegateStore.json";
import { BigNumber } from "ethers";
import { useAccount, useContractReads, useNetwork } from "wagmi";

import { NFTRewardTier, useNftRewards } from "./useNftRewards";

const MAX_NFT_REWARD_TIERS = 3;

/**
 * Return the NFT Rewards that the connected wallet owns.
 */
export const useNftRewardsForAccount = (): {
  data: NFTRewardTier[];
  isLoading: boolean;
} => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: nftRewards, isLoading: nftRewardsLoading } = useNftRewards();

  // Get tiers
  const tiersRead =
    nftRewards?.map((nft) => {
      return {
        contractInterface: JBTiered721DelegateStore.abi,
        addressOrName: "0x236d9f67587782420151225ff867044b9ccd30e3", // TODO source from npm package
        functionName: "tiers",
        args: [nft.address, 0, MAX_NFT_REWARD_TIERS],
        chainId: chain?.id,
      };
    }) ?? [];
  const { data: tiers, isLoading: tiersLoading } = useContractReads({
    contracts: tiersRead,
  });
  const allTiers =
    tiers
      ?.map((tierCollection, idx) => {
        return tierCollection?.map((tier) => {
          return {
            ...tier,
            token: nftRewards?.[idx],
          };
        });
      })
      .flatMap((tierCollection) => tierCollection) ?? [];

  // get user balance for each tier
  const tierBalanceOfRead =
    allTiers?.map((tier) => {
      return {
        contractInterface: JBTiered721DelegateStore.abi,
        addressOrName: "0x236d9f67587782420151225ff867044b9ccd30e3",
        functionName: "tierBalanceOf",
        args: [tier.token.address, address, tier.id],
      };
    }) ?? [];

  const { data: tierBalances, isLoading: tierBalancesLoading } =
    useContractReads({
      contracts: tierBalanceOfRead,
    });

  const data = allTiers
    ?.map((tier, idx) => {
      return {
        ...tier,
        balance: tierBalances?.[idx],
      };
    })
    .filter((nft) => nft.balance?.gt(0));

  return {
    data,
    isLoading: tierBalancesLoading || tiersLoading || nftRewardsLoading,
  };
};
