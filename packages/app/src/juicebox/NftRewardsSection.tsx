import { gql } from "urql";
import { useAccount } from "wagmi";

import { useNftRewardsSectionQuery } from "../../codegen/juicebox";
import { juiceboxNftProjectIds } from "../constants";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
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

  const [queryResult] = useNftRewardsSectionQuery({
    pause: !address,
    variables: {
      address,
      projectIds: juiceboxNftProjectIds,
    },
  });
  const tokens = queryResult.data?.tokens;
  if (!tokens?.length) return null;

  return (
    <Container className="space-y-16">
      <SectionHeading
        title="Your Slate"
        description={
          <p>
            Your super ticket collection. Support all our movies to multiply
            your green-light power.{" "}
            <a
              href="#"
              className="text-emerald-500 hover:underline hover:underline-offset-2"
            >
              Learn more &rarr;
            </a>
          </p>
        }
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tokens.map((nft) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
    </Container>
  );
};
