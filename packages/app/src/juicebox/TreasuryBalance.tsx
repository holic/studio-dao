import { ethers } from "ethers";

import { useTreasuryBalanceQuery } from "../../codegen/juicebox";
import { juiceboxTreasuryIds } from "../constants";
import { PendingIcon } from "../icons/PendingIcon";

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
