import Image from "next/image";

import { JUICEBOX_PINATA_GATEWAY_BASE_URL } from "../constants/juicebox";
import { useGet } from "../useGet";
import { NFTReward } from "./hooks/useNftRewards";

export function NftRewardCard({ nftReward }: { nftReward: NFTReward }) {
  const nftMetadata = useGet(nftReward.tokenUri);
  const juiceboxProjectMetadata = useGet(
    `${JUICEBOX_PINATA_GATEWAY_BASE_URL}/${nftReward.project.metadataUri}`
  );
  // TODO fetch JB project info, to display the project name

  return (
    <div className="border rounded border-slate-500 overflow-hidden text-left p-6">
      {nftMetadata?.image && (
        <Image
          src={nftMetadata.image}
          alt="NFT image"
          className="rounded block"
          width={240}
          height={240}
        />
      )}

      <span className="font-dmserif text-xl block mb-6 mt-4">
        {nftReward.name}
      </span>

      <a
        className="block text-slate-500 text-sm hover:text-emerald-500 hover:underline hover:underline-offset-2"
        href={`https://goerli.juicebox.money/v2/p/${nftReward.project.projectId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {juiceboxProjectMetadata?.name}
      </a>
    </div>
  );
}
