import { ethers } from "ethers";
import { gql } from "urql";
import { useAccount } from "wagmi";

import { useGreenlightPowerQuery } from "../../codegen/juicebox";
import { juiceboxProjectIds } from "../constants";
import { PendingIcon } from "../icons/PendingIcon";

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

  const balance = queryResult.data?.participants
    ?.map((p) => ethers.BigNumber.from(p.balance))
    .reduce((a, b) => a.add(b), ethers.BigNumber.from(0));

  return (
    <>
      ✦ Your Green-light power:{" "}
      <span className="bg-emerald-900/50 px-1.5 py-0.5 rounded">
        {balance ? (
          parseFloat(ethers.utils.formatEther(balance)).toLocaleString()
        ) : (
          <PendingIcon className="inline-flex" />
        )}
      </span>
    </>
  );
};
