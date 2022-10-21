import { useAccount } from "wagmi";

import { ConnectWalletButton } from "../ConnectWalletButton";
import { PendingIcon } from "../PendingIcon";
import { useNftRewardsForAccount } from "./hooks/useNftRewardsForAccount";
import { NftRewardTierCard } from "./NftRewardTierCard";

export function NftRewardList() {
  const { isConnected } = useAccount();
  const { data: balances, isLoading } = useNftRewardsForAccount();

  if (!isConnected) {
    return (
      <div className="flex justify-center">
        <ConnectWalletButton connectText="Connect wallet" />
      </div>
    );
  }

  if (isLoading) {
    return <PendingIcon />;
  }

  if (!balances || balances.length === 0) {
    return <p>You haven&apos;t collected any NFT Rewards yet.</p>;
  }

  return (
    <div>
      <h4 className="text-lg text-left mb-6">NFT Rewards</h4>

      <div className="flex flex-wrap gap-8">
        {balances?.map((tier) => (
          <NftRewardTierCard key={tier.id} nftRewardTier={tier} />
        ))}
      </div>
    </div>
  );
}
