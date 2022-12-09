import { ethers } from "ethers";

import { useTreasuryBalanceQuery } from "../../codegen/juicebox";
import { juiceboxTreasuryIds } from "../constants";
import { PendingIcon } from "../icons/PendingIcon";

export const TreasuryBalance = () => {
  const [queryResult] = useTreasuryBalanceQuery({
    variables: {
      projectIds: juiceboxTreasuryIds,
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
