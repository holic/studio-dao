import ERC721Json from "@jbx-protocol/juice-nft-rewards/out/ERC721.sol/ERC721.json";
import { useAccount, useContractReads, useNetwork } from "wagmi";

import { NFTReward, useNftRewards } from "./useNftRewards";

/**
 * Return the NFT Rewards that the connected wallet owns.
 */
export const useNftRewardsForAccount = (): {
  data: NFTReward[];
  isLoading: boolean;
} => {
  const { data: nftRewards, isLoading: nftRewardsLoading } = useNftRewards();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const contractsToRead =
    nftRewards?.map((nft) => {
      return {
        contractInterface: ERC721Json.abi,
        addressOrName: nft.address,
        functionName: "balanceOf",
        args: [address],
        chainId: chain?.id,
      };
    }) ?? [];

  const { data: accountNftBalances, isLoading: contractsLoading } =
    useContractReads({
      contracts: contractsToRead,
    });

  const data = nftRewards
    ?.map((nft, idx) => {
      return {
        ...nft,
        balance: accountNftBalances?.[idx],
      };
    })
    .filter((nft) => nft.balance?.gt(0));

  return { data, isLoading: contractsLoading || nftRewardsLoading };
};
