import { base58 } from "ethers/lib/utils";
import Image from "next/image";

import { JUICEBOX_PINATA_GATEWAY_BASE_URL } from "../constants/juicebox";
import { useGet } from "../useGet";
import { NFTRewardTier } from "./hooks/useNftRewards";

export function decodeEncodedIPFSUri(hex: string) {
  // Add default ipfs values for first 2 bytes:
  // - function:0x12=sha2, size:0x20=256 bits
  // - also cut off leading "0x"
  const hashHex = "1220" + hex.slice(2);
  const hashBytes = Buffer.from(hashHex, "hex");
  const hashStr = base58.encode(hashBytes);
  return hashStr;
}

export function NftRewardTierCard({
  nftRewardTier,
}: {
  nftRewardTier: NFTRewardTier;
}) {
  const rewardTierMetadataUri = decodeEncodedIPFSUri(
    nftRewardTier.encodedIPFSUri
  );
  const nftMetadata = useGet(
    `${JUICEBOX_PINATA_GATEWAY_BASE_URL}/${rewardTierMetadataUri}`
  );
  const juiceboxProjectMetadata = useGet(
    `${JUICEBOX_PINATA_GATEWAY_BASE_URL}/${nftRewardTier.token.project.metadataUri}`
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
        {nftMetadata?.name}
      </span>

      <a
        className="block text-slate-500 text-sm hover:text-emerald-500 hover:underline hover:underline-offset-2"
        href={`https://goerli.juicebox.money/v2/p/${nftRewardTier.token.project.projectId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {juiceboxProjectMetadata?.name}
      </a>
    </div>
  );
}
