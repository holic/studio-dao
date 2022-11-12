import { ReactNode } from "react";
import {
  createClient as createGraphClient,
  Provider as GraphProvider,
} from "urql";

const graphClientURL =
  process.env.NEXT_PUBLIC_GRAPH_CLIENT_URL ||
  "https://api.studio.thegraph.com/query/30654/goerli-dev/0.3.0";

const graphClient = createGraphClient({
  url: graphClientURL,
});

type Props = {
  children: ReactNode;
};

export const JuiceboxGraphProvider = ({ children }: Props) => (
  <GraphProvider value={graphClient}>{children}</GraphProvider>
);
