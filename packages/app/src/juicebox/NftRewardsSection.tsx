import { useMemo } from "react";
import { gql } from "urql";
import { useAccount } from "wagmi";

import { useNftRewardsSectionQuery } from "../../codegen/subgraph";
import { NftCard, NftCardFragment } from "./NftCard";

gql`
  query NftRewardsSection($address: Bytes!, $projectIds: [Int!]!) {
    tokens: jb721DelegateTokens(where: { owner_: { wallet: $address } }) {
      id
      ...NftCard
    }
  }
  ${NftCardFragment}
`;

export const NftRewardsSection = () => {
  const { address } = useAccount();

  const queryOptions = useMemo(
    () => ({
      pause: !address,
      variables: {
        address: "0x0028c35095d34c9c8a3bc84cb8542cb182fcfa8e",
        projectIds: [38, 47],
      },
      context: {
        url: "https://api.studio.thegraph.com/query/31944/jb-v3-goerli/0.0.79",
      },
    }),
    [address]
  );

  const [queryResult] = useNftRewardsSectionQuery(queryOptions);
  const tokens = queryResult.data?.tokens;
  if (!tokens?.length) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 space-y-16">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-3xl font-dmserif text-white">Your Slate</h2>
        <p className="max-w-prose mx-auto">
          Your super ticket collection. Support all our movies to multiply your
          green-light power.{" "}
          <a
            href="#"
            className="text-emerald-500 hover:underline hover:underline-offset-2"
          >
            Learn more &rarr;
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tokens.map((nft) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};
