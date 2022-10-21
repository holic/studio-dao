import JBTiered721DelegateStore from "@jbx-protocol/juice-nft-rewards/out/JBTiered721DelegateStore.sol/JBTiered721DelegateStore.json";
import { BigNumber } from "ethers";
import { chain, useAccount, useContractReads } from "wagmi";

import { JBTiered721DelegateStoreAddressGoerli } from "../../constants/juicebox";
import { useNftRewardTiers } from "./useNftRewardTiers";
import { NFTRewardTier } from "./useNftRewardTokens";

/**
 * Return the NFT reward tiers that the connected wallet owns.
 */
export const useNftRewardsForAccount = (): {
  data: NFTRewardTier[] | undefined;
  isLoading: boolean;
} => {
  const { address } = useAccount();
  const { data: tiers, isLoading: tiersLoading } = useNftRewardTiers();

  // get user balance for each tier
  const tierBalanceOfRead =
    tiers?.map((tier) => {
      return {
        contractInterface: JBTiered721DelegateStore.abi,
        chainId: chain.goerli.id,
        addressOrName: JBTiered721DelegateStoreAddressGoerli,
        functionName: "tierBalanceOf",
        args: [tier.token.address, address, tier.id],
      };
    }) ?? [];

  const { data: tierBalances, isLoading: tierBalancesLoading } =
    useContractReads({
      contracts: tierBalanceOfRead,
    });

  const data = tiers
    ?.map((tier, idx) => {
      return {
        ...tier,
        balance: BigNumber.from(tierBalances?.[idx]),
      };
    })
    .filter((nft) => nft.balance?.gt(0));

  return {
    data,
    isLoading: tierBalancesLoading || tiersLoading,
  };
};
