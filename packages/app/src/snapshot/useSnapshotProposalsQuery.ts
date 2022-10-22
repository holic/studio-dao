import { useQuery } from "wagmi";

const snapshotUrl =
  process.env.NEXT_PUBLIC_SNAPSHOT_URL || "https://hub.snapshot.org/graphql";
const staleTime = 60 * 1000; // 60 seconds

type SnapshotSpace = {
  id: string;
  name: string;
  about: string;
  network: string;
  symbol: string;
  members: string[];
};

type SnapshotProposalState = "open" | "closed";

export type SnapshotProposal = {
  id: string;
  title: string;
  body: string;
  choices: string[];
  scores: number[];
  scores_total: number;
  start: number;
  end: number;
  snapshot: string;
  state: SnapshotProposalState;
  author: string;
  space: Partial<SnapshotSpace>;
};

type GraphQlData = { [key: string]: any; [index: number]: never };

interface GraphQLError {
  locations: { column: number; line: number }[];
  message: string;
}

interface GraphQlResponse<T extends GraphQlData> {
  data: T;
  errors?: Array<GraphQLError>;
}

type SnapshotGraphQLResponse = GraphQlResponse<{
  space?: SnapshotSpace;
  spaces?: SnapshotSpace[];
  proposal?: SnapshotProposal;
  proposals?: SnapshotProposal[];
}>;

async function querySnapshotGraphQL<T extends GraphQlData>(query: string) {
  const response = await fetch(snapshotUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  }).then((res) => res.json() as Promise<SnapshotGraphQLResponse>);

  if ("errors" in response) {
    throw new Error(
      response.errors?.[0]?.message || "Something is wrong with this request"
    );
  }

  return response.data;
}

const proposalsQuery = `query Proposals {
    proposals(
      where: {
        space_in: ["studiodao.eth"],
      },
      orderBy: "created",
      orderDirection: desc,
      first: 1
    ) {
      id
      title
      body
      choices
      scores
      scores_total
      votes
      start
      end
      snapshot
      state
      author
      space {
        id
        name
      }
    }
  }`;

export function useSnapshotProposalsQuery() {
  return useQuery(
    ["subgraph-query", proposalsQuery],
    () => querySnapshotGraphQL(proposalsQuery),
    {
      staleTime,
    }
  );
}
