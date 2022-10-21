import { useAccount } from "wagmi";

import { ConnectWalletButton } from "../ConnectWalletButton";
import { useNftRewardsForAccount } from "./hooks/useNftRewardsForAccount";
import { NftRewardCard } from "./NftRewardCard";

export function NftRewardList() {
  const balances = useNftRewardsForAccount() ?? [];
  const { isConnected } = useAccount();
  if (!isConnected) {
    return (
      <div className="flex justify-center">
        <ConnectWalletButton connectText="Connect wallet" />
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-lg text-left mb-6">NFT Rewards</h4>

      <div className="flex flex-wrap gap-8">
        {balances?.map((nft, idx) => (
          <NftRewardCard key={idx} JB721DelegateToken={nft} />
        ))}
      </div>
    </div>
  );
}
