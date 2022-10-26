import { gql } from "urql";
import { useAccount } from "wagmi";

import { useGreenlightPowerQuery } from "../../codegen/juicebox";
import { juiceboxProjectIds } from "../constants";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { NftCard } from "./NftCard";

gql`
  query GreenlightPower($address: Bytes!, $projectIds: [Int!]!) {
    participants(where: { wallet: $address, projectId_in: $projectIds }) {
      id
      balance
    }
  }
`;

export const GreenlightPower = () => {
  const { address } = useAccount();

  const [queryResult] = useGreenlightPowerQuery({
    pause: !address,
    variables: {
      address,
      projectIds: juiceboxProjectIds,
    },
  });

  if (!address) {
    return (
      <>
        ✦{" "}
        <a href="#box-office" className="text-emerald-500 hover:underline">
          Earn Green-light power
        </a>
      </>
    );
  }

  const balance =
    queryResult.data?.participants
      ?.map((p) => p.balance / 1e18)
      .reduce((a, b) => a + b, 0) ?? 0;

  return (
    <>
      ✦ Your Green-light power:{" "}
      <span className="bg-emerald-900/50 px-2 py-1 rounded">
        {balance.toLocaleString()}
      </span>
    </>
  );
};
