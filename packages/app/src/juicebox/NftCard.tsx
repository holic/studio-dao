import Image from "next/image";
import { gql } from "urql";

import { NftCardFragment as NFT } from "../../codegen/juicebox";
import { PendingIcon } from "../icons/PendingIcon";
import { useFetchJson } from "./useFetchJson";

export const NftCardFragment = gql`
  fragment NftCard on JB721DelegateToken {
    id
    address
    tokenId
    name
    tokenUri
    project {
      projectId
      metadataUri
    }
  }
`;

type Props = {
  nft: NFT;
};

export const NftCard = ({ nft }: Props) => {
  const tokenMetadata = useFetchJson(nft.tokenUri);
  const projectMetadata = useFetchJson(
    nft.project.metadataUri
      ? `https://jbx.mypinata.cloud/ipfs/${nft.project.metadataUri}`
      : null
  );

  if (!tokenMetadata.data || !projectMetadata.data) {
    return (
      <div className="flex flex-col items-center justify-center bg-black/30 rounded-lg text-xl p-6 h-80">
        <PendingIcon />
      </div>
    );
  }

  return (
    <a
      className="group flex flex-col bg-black/30 rounded-lg overflow-hidden transition hover:scale-105"
      href={`https://goerli.juicebox.money/v2/p/${nft.project.projectId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {tokenMetadata.data.image ? (
        <div className="w-full aspect-square relative opacity-80 transition group-hover:opacity-100">
          <Image
            src={tokenMetadata.data.image}
            alt="NFT image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}
      <div className="p-6 space-y-2">
        <p className="text-xl font-medium">{tokenMetadata.data.name}</p>
        <p className="text-zinc-500">{projectMetadata.data.name}</p>
      </div>
    </a>
  );
};
