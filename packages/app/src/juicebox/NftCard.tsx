import Image from "next/image";
import { gql } from "urql";

import { NftCardFragment as NFT } from "../../codegen/juicebox";
import { PendingIcon } from "../icons/PendingIcon";
import { useFetchJson } from "./useFetchJson";

export const NftCardFragment = gql`
  fragment NftCard on JB721DelegateToken {
    id
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

  // TOOD: better loading state
  if (!tokenMetadata.data || !projectMetadata.data) {
    return <PendingIcon />;
  }

  // console.log("got tokenMetadata", tokenMetadata.data);
  // console.log("got projectMetadata", projectMetadata.data);

  return (
    <div className="border rounded border-slate-500 overflow-hidden text-left p-6">
      {tokenMetadata.data.image ? (
        <div className="w-full aspect-square relative">
          <Image
            src={tokenMetadata.data.image}
            alt="NFT image"
            className="rounded block"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}

      <span className="font-dmserif text-xl block mb-6 mt-4">{nft.name}</span>

      <a
        className="block text-slate-500 text-sm hover:text-emerald-500 hover:underline hover:underline-offset-2"
        href={`https://goerli.juicebox.money/v2/p/${nft.project.projectId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {projectMetadata.data.name}
      </a>
    </div>
  );
};
