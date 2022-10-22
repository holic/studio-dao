import { useAccount, useNetwork } from "wagmi";

import { ConnectWalletButton } from "../ConnectWalletButton";
import { targetChainId } from "../EthereumProviders";
import { PendingIcon } from "../PendingIcon";
import { useIsMounted } from "../useIsMounted";
import { useNftRewardsForAccount } from "./hooks/useNftRewardsForAccount";
import { NftRewardTierCard } from "./NftRewardTierCard";

export function NftRewardList() {
  const isMounted = useIsMounted();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: balances, isLoading } = useNftRewardsForAccount();

  // Avoid flash of unconnected wallet
  if (!isMounted) return null;

  if (!isConnected) {
    return (
      <div className="flex justify-center">
        <ConnectWalletButton label="Connect wallet" />
      </div>
    );
  }

  if (chain?.id !== targetChainId) {
    return (
      <div className="flex justify-center">
        <span className="text-xl">Please connect to Goerli</span>
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
