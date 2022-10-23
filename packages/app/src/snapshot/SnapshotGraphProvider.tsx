import { ReactNode } from "react";
import {
  createClient as createGraphClient,
  Provider as GraphProvider,
} from "urql";

const graphClient = createGraphClient({
  url: "https://hub.snapshot.org/graphql",
});

type Props = {
  children: ReactNode;
};

export const SnapshotGraphProvider = ({ children }: Props) => (
  <GraphProvider value={graphClient}>{children}</GraphProvider>
);
