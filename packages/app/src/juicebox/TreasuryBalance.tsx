import { ethers } from "ethers";

import { useTreasuryBalanceQuery } from "../../codegen/juicebox";
import { juiceboxTreasuryIds } from "../constants";
import { PendingIcon } from "../icons/PendingIcon";

<<<<<<< HEAD
export const TreasuryBalance = () => {
=======
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
>>>>>>> 6eda9d2 (alien assets)
  const [queryResult] = useTreasuryBalanceQuery({
    variables: {
      projectIds: projectId ? [projectId] : juiceboxTreasuryIds,
    },
  });

  const balance = queryResult.data?.projects
    ?.map((p) => ethers.BigNumber.from(p.totalPaid))
    .reduce((a, b) => a.add(b), ethers.BigNumber.from(0));

  return (
    <>
      Total Raised:{" "}
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
