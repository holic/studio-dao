import { DateTime } from "luxon";
import { gql } from "urql";

import { useSnapshotSectionQuery } from "../../codegen/snapshot";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { useIsMounted } from "../useIsMounted";

// TODO: convince snapshot to give us better field types (too many nullables)
gql`
  query SnapshotSection {
    proposals(
      where: { space_in: ["studiodao.eth"], state: "active" }
      orderBy: "created"
      orderDirection: desc
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
      link
      space {
        id
        name
      }
    }
  }
`;

export const SnapshotSection = () => {
  const isMounted = useIsMounted();

  const [queryResult] = useSnapshotSectionQuery();
  const currentProposal = queryResult.data?.proposals?.[0];

  // hydration breaks in this component, so skip SSR for now
  if (!isMounted) return null;

  if (!currentProposal) {
    return null;
  }

  console.log("currentProposal", currentProposal);
  const canVote =
    currentProposal.state === "active" &&
    currentProposal.end * 1000 > Date.now();

  return (
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-left bg-black/30 rounded-3xl divide-x divide-zinc-800 py-4 md:py-8 -my-8">
        <div className="sm:w-6/12 px-8 md:px-12 py-4">
          <SectionHeading
            title={currentProposal.title}
            description={
              <>
                <p>{currentProposal.body}</p>
                <p>
                  <a
                    href="https://docs.studiodao.xyz/studiodao-explainer/studio-or-dao-governance/studio-governance"
                    className="text-emerald-500 hover:underline"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Learn more &rarr;
                  </a>
                </p>
              </>
            }
          />
        </div>
        <div className="sm:w-6/12 px-8 md:px-12 py-4 flex flex-col gap-4">
          <p className="text-center text-zinc-500">
            {canVote ? (
              <>
                Voting ends{" "}
                {DateTime.fromSeconds(currentProposal.end).toRelative()}.
              </>
            ) : (
              <>Stay tuned for the next vote!</>
            )}
          </p>
          <div className="flex flex-col gap-1">
            {currentProposal.choices.map((choice, i) => {
              const percentage = Math.round(
                ((currentProposal.scores?.[i] ?? 0) /
                  (currentProposal.scores_total ?? 1)) *
                  100
              );
              return (
                <a
                  key={choice}
                  className="px-4 py-3 group hover:ring hover:ring-emerald-700/40 rounded transition relative overflow-clip"
                  href={currentProposal.link ?? "#"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-emerald-900/20 group-hover:bg-emerald-700/20 transition rounded"
                    style={{ right: `${100 - percentage}%` }}
                  ></span>
                  <span className="relative flex items-center gap-2">
                    <span className="inline-flex w-3 h-3 rounded-full border-2 border-zinc-600 group-hover:bg-zinc-600 transition"></span>{" "}
                    {choice}
                  </span>
                </a>
              );
            })}
          </div>
          <ButtonLink
            href={currentProposal.link ?? "#"}
            target="_blank"
            size="sm"
            className="self-center"
          >
            {canVote ? "Vote" : "View"} on Snapshot.org
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
};
