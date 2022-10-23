import { ConnectKitButton } from "connectkit";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import { Button } from "./Button";
import { useIsMounted } from "./useIsMounted";

type Props = {
  label?: string;
};

export const ConnectWalletButton = ({ label = "Connect" }: Props) => {
  const isMounted = useIsMounted();

  // Avoid flash of unconnected wallet
  if (!isMounted) return null;

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, address, ensName }) => (
        <Button
          size="sm"
          variant={address ? "secondary" : "primary"}
          className="self-start sm:self-auto"
          onClick={show}
          pending={isConnecting}
        >
          <span className="flex-grow min-w-0 ">
            {isConnected ? (
              <span className="max-w-[10rem] overflow-hidden text-ellipsis block">
                {ensName || address}
              </span>
            ) : (
              label
            )}
          </span>
        </Button>
      )}
    </ConnectKitButton.Custom>
  );
};
