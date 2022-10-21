import { ConnectKitButton } from "connectkit";

import { Button } from "./Button";

export function ConnectWalletButton({
  connectText = "Connect",
}: {
  connectText?: string;
}) {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, address, ensName }) => (
        <Button
          size="sm"
          variant={isConnected ? "secondary" : "primary"}
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
              connectText
            )}
          </span>
        </Button>
      )}
    </ConnectKitButton.Custom>
  );
}
