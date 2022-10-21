import { useAccount, useConnect, useDisconnect } from "wagmi";

import { Button } from "./Button";
import { useIsMounted } from "./useIsMounted";

type Props = {
  label?: string;
};

export const ConnectWalletButton = ({ label = "Connect" }: Props) => {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const isMounted = useIsMounted();

  // Avoid flash of unconnected wallet
  if (!isMounted) return null;

  return (
    <Button
      size="sm"
      variant={address ? "secondary" : "primary"}
      className="self-start sm:self-auto"
      onClick={() => {
        address ? disconnect() : connect({ connector: connectors[0] });
      }}
    >
      <span className="flex-grow min-w-0 ">
        {address ? (
          <span className="max-w-[10rem] overflow-hidden text-ellipsis block">
            {address}
          </span>
        ) : (
          label
        )}
      </span>
    </Button>
  );
};
