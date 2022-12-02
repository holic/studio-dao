import { ethers } from "ethers";
import { gql } from "urql";

import { useTreasuryBalanceQuery } from "../../codegen/juicebox";
import { juiceboxTreasuryIds } from "../constants";
import { PendingIcon } from "../icons/PendingIcon";

gql`
  query TreasuryBalance($projectIds: [Int!]!) {
    projects(where: { projectId_in: $projectIds }) {
      id
      currentBalance
    }
  }
`;

type Props = {
  projectId?: number;
};

export const TreasuryBalance = ({ projectId }: Props) => {
  const [queryResult] = useTreasuryBalanceQuery({
    variables: {
      projectIds: projectId ? [projectId] : juiceboxTreasuryIds,
    },
  });

  const balance = queryResult.data?.projects
    ?.map((p) => ethers.BigNumber.from(p.currentBalance))
    .reduce((a, b) => a.add(b), ethers.BigNumber.from(0));

  return (
    <>
      Current Treasury:{" "}
      {balance ? (
        <span className=" font-medium">
          Ξ{ethers.utils.formatEther(balance)}
        </span>
      ) : (
        <PendingIcon className="inline-flex" />
      )}
    </>
  );
};
