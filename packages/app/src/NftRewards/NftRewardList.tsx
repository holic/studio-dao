import { useAccount } from "wagmi";

import { ConnectWalletButton } from "../ConnectWalletButton";
import { useNftRewardsForAccount } from "./hooks/useNftRewardsForAccount";
import { NftRewardCard } from "./NftRewardCard";

export function NftRewardList() {
  const { data: balances, isLoading } = useNftRewardsForAccount() ?? [];
  const { isConnected } = useAccount();
  if (!isConnected) {
    return (
      <div className="flex justify-center">
        <ConnectWalletButton connectText="Connect wallet" />
      </div>
    );
  }

  if (isLoading) {
    return "...";
  }

  if (balances.length === 0) {
    return <p>You haven&apos;t collected any NFT Rewards yet.</p>;
  }

  return (
    <div>
      <h4 className="text-lg text-left mb-6">NFT Rewards</h4>

      <div className="flex flex-wrap gap-8">
        {balances?.map((nft) => (
          <NftRewardCard key={nft.address} nftReward={nft} />
        ))}
      </div>
    </div>
  );
}
