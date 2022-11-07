import { ReactNode } from "react";
import {
  createClient as createGraphClient,
  Provider as GraphProvider,
} from "urql";

const graphClient = createGraphClient({
  url: "https://api.studio.thegraph.com/query/30654/goerli-dev/0.3.0",
});

type Props = {
  children: ReactNode;
};

export const JuiceboxGraphProvider = ({ children }: Props) => (
  <GraphProvider value={graphClient}>{children}</GraphProvider>
);
