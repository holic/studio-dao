import Image from "next/image";

import { useGet } from "../useGet";
import { JB721DelegateToken } from "./hooks/useStudiodaoNftRewards";

export function NftRewardCard({
  JB721DelegateToken,
}: {
  JB721DelegateToken: JB721DelegateToken;
}) {
  const nftMetadata = useGet(JB721DelegateToken.tokenUri);
  // TODO fetch JB project info, to display the project name

  return (
    <div className="border rounded border-slate-500 overflow-hidden text-left p-6">
      <Image
        src={nftMetadata?.image}
        alt="NFT image"
        className="rounded block"
        width={240}
        height={240}
      />

      <span className="font-dmserif text-xl block mb-6 mt-4">
        {JB721DelegateToken.name}
      </span>

      <span className="block text-slate-500 text-sm">Project Name</span>
    </div>
  );
}
