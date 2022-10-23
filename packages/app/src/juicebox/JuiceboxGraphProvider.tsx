import { ReactNode } from "react";
import {
  createClient as createGraphClient,
  Provider as GraphProvider,
} from "urql";

const graphClient = createGraphClient({
  url: "https://api.studio.thegraph.com/query/31944/jb-v3-goerli/0.0.79",
});

type Props = {
  children: ReactNode;
};

export const JuiceboxGraphProvider = ({ children }: Props) => (
  <GraphProvider value={graphClient}>{children}</GraphProvider>
);
