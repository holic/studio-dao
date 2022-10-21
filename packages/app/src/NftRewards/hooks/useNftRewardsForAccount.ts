import ERC721Json from "@jbx-protocol/juice-nft-rewards/out/ERC721.sol/ERC721.json";
import { useAccount, useContractReads, useNetwork } from "wagmi";

import { JB721DelegateToken, useNftRewards } from "./useStudiodaoNftRewards";

/**
 * Return the NFT Rewards that the connected wallet owns.
 */
export const useNftRewardsForAccount = (): JB721DelegateToken[] => {
  const nftRewards = useNftRewards();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const contractsToRead =
    nftRewards?.map((nft) => {
      return {
        contractInterface: ERC721Json.abi,
        addressOrName: nft.id,
        functionName: "balanceOf",
        args: [address],
        chainId: chain?.id,
      };
    }) ?? [];

  const accountNftBalances = useContractReads({
    contracts: contractsToRead,
  });

  return nftRewards
    ?.map((nft, idx) => {
      return {
        ...nft,
        balance: accountNftBalances.data?.[idx],
      };
    })
    .filter((nft) => nft.balance?.gt(0));
};
